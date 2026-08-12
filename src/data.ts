// ─── TEAM ──────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Koffi Patrick-Léon',
    shortName: 'Patrick-Léon',
    handle: 'TechWizard',
    role: 'Co-founder & AI and API Security, Pentesting, DevSecOps',
    specialty: 'AI RedTeaming · DevSecOps',
    bio: 'Founder of NexShield. Expert in AI RedTeaming, LLM security, DevSecOps, and offensive tooling. Builds security systems that adapt to tomorrow\'s threats — not just yesterday\'s.',
    tags: ['AI RedTeaming', 'LLM Security', 'DevSecOps', 'Pentest'],
    color: '#00e5ff',
    github: 'https://github.com/Patrickleondev',
    linkedin: 'https://linkedin.com/in/patrick-léon-gandonou',
  },
  {
    name: 'Winero',
    shortName: 'Winero',
    handle: 'Winero',
    role: 'Co-founder & IT and Systems Engineering, Pentesting, Privacy',
    specialty: 'OSINT · Data Intelligence',
    bio: 'Backend architecture, OSINT investigations, and data intelligence pipelines. Builds the infrastructure that turns raw intelligence into actionable security insights.',
    tags: ['Backend Dev', 'OSINT', 'DevOps', 'Threat Intel'],
    color: '#7c3aed',
    github: '',
    linkedin: '',
  },
  {
    name: 'Laurent',
    shortName: 'Laurent',
    handle: 'Laurent',
    role: 'Co-founder & Backend, Pentesting and Forensics',
    specialty: 'DFIR · Forensics',
    bio: 'Mobile (Flutter) and backend developer, DFIR specialist, and digital forensics practitioner. When incidents happen, Laurent finds out how — and makes sure they don\'t happen again.',
    tags: ['Flutter', 'DFIR', 'Forensics', 'OSINT'],
    color: '#22c55e',
    github: '',
    linkedin: '',
  },
  {
    name: 'Herbert',
    shortName: 'Herbert',
    handle: 'Herbert',
    role: 'Co-founder & Strategy',
    specialty: 'Creative Director · Community',
    bio: 'Frontend developer and creative force behind NexShield\'s visual identity. Manages community presence and turns technical content into stories people actually want to read.',
    tags: ['Web Dev', 'Design', 'Community', 'Content'],
    color: '#f59e0b',
    github: '',
    linkedin: '',
  },
  {
    name: 'Dora (Deborah)',
    shortName: 'Dora',
    handle: 'Dora',
    role: 'Co-founder & GRC Lead',
    specialty: 'Compliance · Communications',
    bio: 'Governance, Risk & Compliance expert and communications lead. Translates complex security postures into business language — and makes sure NexShield\'s voice is clear, consistent, and present.',
    tags: ['GRC', 'Risk Management', 'Compliance', 'Communications'],
    color: '#ec4899',
    github: '',
    linkedin: '',
  },
]

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 'ai-redteaming',
    icon: 'Brain',
    title: 'AI RedTeaming',
    short: 'We test your AI systems the way adversaries will — before they do.',
    description:
      'Adversarial testing of LLMs, AI agents, and integrated AI tools. We identify prompt injection vulnerabilities, jailbreak surfaces, data exfiltration vectors, and systemic AI weaknesses before attackers discover them.',
    tags: ['LLM Security', 'Prompt Injection', 'Model Auditing'],
    available: true,
  },
  {
    id: 'soc-ai-tools',
    icon: 'MonitorDot',
    title: 'SOC AI Tools',
    short: 'AI-augmented alerting and detection for web, mobile, and networks.',
    description:
      'We build and deploy custom AI-powered monitoring tools that detect anomalies across your infrastructure in real time — web, mobile, network, and system layers.',
    tags: ['Threat Detection', 'Real-time Monitoring', 'Custom Tooling'],
    available: true,
  },
  {
    id: 'pentest',
    icon: 'ShieldAlert',
    title: 'Penetration Testing',
    short: 'Methodical, report-backed offensive assessments of your infrastructure.',
    description:
      'Web application, API, network, and mobile penetration testing. We produce clear, actionable reports with CVSS-rated findings and remediation guidance.',
    tags: ['Web Pentest', 'API Security', 'Network Pentest', 'Mobile'],
    available: true,
  },
  {
    id: 'code-audit',
    icon: 'FileCode2',
    title: 'Code Security Audit',
    short: 'Source code review for security vulnerabilities and logic flaws.',
    description:
      'Manual and automated code audits for web backends, APIs, and mobile apps. We identify injection flaws, authentication bypasses, insecure dependencies, and business logic vulnerabilities.',
    tags: ['SAST', 'Dependency Audit', 'Logic Flaws'],
    available: true,
  },
  {
    id: 'awareness',
    icon: 'GraduationCap',
    title: 'Security Awareness',
    short: 'Tailored training and awareness programs for your organization.',
    description:
      'Phishing simulations, security workshops, and custom awareness campaigns. We help teams understand real threats through practical, engaging training.',
    tags: ['Phishing Sim', 'Workshops', 'Campaigns'],
    available: true,
  },
  {
    id: 'xprivacy',
    icon: 'Lock',
    title: 'X-Privacy',
    short: 'Privacy by design — consulting and implementation for digital sovereignty.',
    description:
      'Privacy-by-design consulting, GDPR/compliance guidance, and implementation of privacy-preserving architectures. We believe digital privacy is a right, not a feature.',
    tags: ['Privacy by Design', 'GDPR', 'Compliance'],
    available: true,
  },
]

// ─── HOW WE WORK ─────────────────────────────────────────────────────────────
export const process_steps = [
  {
    step: '01',
    title: 'Assess',
    desc: 'We map your attack surface, understand your stack, and identify the highest-risk areas before touching anything.',
  },
  {
    step: '02',
    title: 'Attack',
    desc: 'We simulate real adversary techniques — no automated scans alone. Every finding is manually validated.',
  },
  {
    step: '03',
    title: 'Report & Fix',
    desc: 'Clear, structured reports with CVSS scores, proof-of-concept, and step-by-step remediation. We stay until it\'s fixed.',
  },
]

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: '5', label: 'Security Experts', suffix: '' },
  { value: '6', label: 'Service Offerings', suffix: '+' },
  { value: '100', label: 'Committed', suffix: '%' },
  { value: '0', label: 'Compromises Accepted', suffix: '' },
]

// ─── VALUES ───────────────────────────────────────────────────────────────────
export const values = [
  {
    title: 'Offensive-First',
    desc: 'We think like attackers. Every assessment starts with the question: "how would I break this?" Security by assumption is not security.',
  },
  {
    title: 'Radical Transparency',
    desc: 'No sugar-coating. Our reports tell you exactly what we found, what it means in business terms, and what to do about it.',
  },
  {
    title: 'Community-Driven',
    desc: 'We come from the CTF and open-source security community. We give back — through knowledge sharing, tooling, and mentoring the next generation.',
  },
  {
    title: 'Built for the Real World',
    desc: 'Enterprise threats don\'t spare small organizations. We bring top-tier techniques to organizations that can\'t afford to be compromised.',
  },
]
