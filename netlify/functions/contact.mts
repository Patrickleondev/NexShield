/**
 * Réception des demandes de contact.
 *
 * Le formulaire du site poste ici ; la fonction valide, filtre les robots, puis
 * envoie un courriel via Resend. Aucune donnée n'est stockée : le courriel EST
 * le stockage, ce qui évite d'héberger des données de prospects.
 *
 * Variables d'environnement requises (Netlify > Site settings > Environment) :
 *   RESEND_API_KEY    clé API Resend
 *   CONTACT_TO        destinataire interne (ex. contact@nexshield.tg)
 *   CONTACT_FROM      expéditeur vérifié chez Resend (ex. site@nexshield.tg)
 */
import type { Context } from '@netlify/functions'

const LIMITE_CHAMP = { nom: 120, societe: 160, courriel: 254, sujet: 160, message: 5000 }
const FENETRE_MS = 10 * 60 * 1000   // 10 minutes
const MAX_PAR_FENETRE = 3           // 3 envois par IP et par fenêtre
const DELAI_MINIMAL_MS = 3000       // un humain met plus de 3 s à remplir le formulaire

/** Compteur en mémoire. Réinitialisé à chaque démarrage d'instance : c'est un
 *  ralentisseur, pas une protection forte. Pour du sérieux, passer par le WAF. */
const compteur = new Map<string, { n: number; debut: number }>()

function limiteAtteinte(cle: string): boolean {
  const maintenant = Date.now()
  const e = compteur.get(cle)
  if (!e || maintenant - e.debut > FENETRE_MS) {
    compteur.set(cle, { n: 1, debut: maintenant })
    return false
  }
  e.n += 1
  return e.n > MAX_PAR_FENETRE
}

function reponse(corps: unknown, statut = 200): Response {
  return new Response(JSON.stringify(corps), {
    status: statut,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

/** Neutralise les injections d'en-tête et borne la longueur. */
function propre(valeur: unknown, max: number): string {
  return String(valeur ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)
}

function courrielValide(valeur: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeur)
}

function echapper(texte: string): string {
  return texte.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

export default async (req: Request, context: Context): Promise<Response> => {
  if (req.method !== 'POST') return reponse({ erreur: 'Méthode non autorisée' }, 405)

  const cle = context.ip ?? req.headers.get('x-nf-client-connection-ip') ?? 'inconnue'
  if (limiteAtteinte(cle)) {
    return reponse({ erreur: 'Trop de demandes. Réessayez dans quelques minutes.' }, 429)
  }

  let donnees: Record<string, unknown>
  try {
    donnees = await req.json()
  } catch {
    return reponse({ erreur: 'Requête invalide' }, 400)
  }

  // Piège à robots : champ invisible côté navigateur, rempli par les automates.
  if (propre(donnees.site, 100)) return reponse({ ok: true })
  // Formulaire soumis trop vite pour être humain.
  const ouvertureMs = Number(donnees.ouvertureMs)
  if (Number.isFinite(ouvertureMs) && Date.now() - ouvertureMs < DELAI_MINIMAL_MS) {
    return reponse({ ok: true })
  }

  const nom = propre(donnees.nom, LIMITE_CHAMP.nom)
  const societe = propre(donnees.societe, LIMITE_CHAMP.societe)
  const courriel = propre(donnees.courriel, LIMITE_CHAMP.courriel).toLowerCase()
  const sujet = propre(donnees.sujet, LIMITE_CHAMP.sujet)
  const message = String(donnees.message ?? '').trim().slice(0, LIMITE_CHAMP.message)
  // Simple libellé, borné et échappé plus bas : pas de liste blanche, pour ne pas
  // se désynchroniser du catalogue de services affiché sur le site.
  const service = propre(donnees.service, 60) || 'non précisé'

  const manques: string[] = []
  if (nom.length < 2) manques.push('nom')
  if (!courrielValide(courriel)) manques.push('courriel')
  if (message.length < 20) manques.push('message')
  if (manques.length) {
    return reponse({ erreur: 'Champs invalides ou manquants', champs: manques }, 422)
  }

  const cleResend = process.env.RESEND_API_KEY
  // CONTACT_TO accepte plusieurs adresses separees par des virgules : toute
  // l'equipe reçoit la demande, personne n'attend que quelqu'un fasse suivre.
  // Resend plafonne a 50 destinataires par envoi.
  const destinataires = (process.env.CONTACT_TO ?? '')
    .split(',')
    .map((a) => a.trim())
    .filter((a) => courrielValide(a))
    .slice(0, 50)
  const expediteur = process.env.CONTACT_FROM
  if (!cleResend || !destinataires.length || !expediteur) {
    // On ne révèle pas la configuration au visiteur, mais on trace côté serveur.
    console.error('contact: configuration incomplète (RESEND_API_KEY, CONTACT_TO, CONTACT_FROM)')
    return reponse({ erreur: 'Service momentanément indisponible' }, 503)
  }

  const lignes = [
    ['Nom', nom], ['Société', societe || '—'], ['Courriel', courriel],
    ['Service', service], ['Sujet', sujet || '—'],
  ]
  const html = `
    <div style="font-family:system-ui,sans-serif;color:#0F172A;max-width:640px">
      <h2 style="color:#0B1220;border-bottom:3px solid #06B6D4;padding-bottom:8px">
        Nouvelle demande depuis le site
      </h2>
      <table style="border-collapse:collapse;width:100%;margin:16px 0">
        ${lignes.map(([k, v], i) => `
          <tr style="background:${i % 2 ? '#F1F5F9' : '#fff'}">
            <td style="padding:8px 12px;font-weight:600;width:140px">${echapper(k)}</td>
            <td style="padding:8px 12px">${echapper(v)}</td>
          </tr>`).join('')}
      </table>
      <h3 style="color:#1E293B">Message</h3>
      <div style="white-space:pre-wrap;background:#F1F5F9;padding:16px;border-left:3px solid #06B6D4">
        ${echapper(message)}
      </div>
      <p style="color:#475569;font-size:12px;margin-top:24px">
        Reçu le ${new Date().toISOString()} — répondre sous 24 h par un courriel de
        synthèse (voir POSTURE.md §5).
      </p>
    </div>`

  try {
    const envoi = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${cleResend}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: `Site NexShield <${expediteur}>`,
        to: destinataires,
        reply_to: courriel,
        subject: `[Site] ${service} — ${nom}${societe ? ` (${societe})` : ''}`,
        html,
      }),
    })
    if (!envoi.ok) {
      console.error('contact: Resend a répondu', envoi.status, await envoi.text())
      return reponse({ erreur: 'Envoi impossible pour le moment' }, 502)
    }
  } catch (e) {
    console.error('contact: échec réseau', e)
    return reponse({ erreur: 'Envoi impossible pour le moment' }, 502)
  }

  return reponse({ ok: true, message: 'Demande reçue. Nous revenons vers vous sous 24 heures.' })
}

export const config = { path: '/api/contact' }
