// ─── TEAM ──────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Koffi Patrick-Léon',
    handle: 'TechWizard',
    role: 'Founder & Lead — AI RedTeaming / DevSecOps',
    bio: 'AI RedTeaming, LLM Pentesting, DevSecOps, and AI tool integration. Passionate about offensive security and building the next generation of cybersecurity tools.',
    tags: ['AI RedTeaming', 'Pentesting', 'DevSecOps', 'Web Security'],
    github: 'https://github.com/Patrickleondev',
    linkedin: 'https://linkedin.com/in/patrick-léon-gandonou',
  },
  {
    name: 'Winero',
    handle: 'Winero',
    role: 'Backend Engineer & OSINT Analyst',
    bio: 'Full-stack backend development, OSINT investigations, DevOps infrastructure, and cybersecurity engineering with a focus on data storage and intelligence pipelines.',
    tags: ['Backend Dev', 'OSINT', 'DevOps', 'Data Engineering'],
    github: '',
    linkedin: '',
  },
  {
    name: 'Laurent',
    handle: 'Laurent',
    role: 'Mobile & Backend Dev / DFIR Specialist',
    bio: 'Backend and Flutter mobile development, digital forensics and incident response (DFIR), OSINT, and foundational offensive security skills.',
    tags: ['Flutter', 'Backend Dev', 'DFIR', 'OSINT'],
    github: '',
    linkedin: '',
  },
  {
    name: 'Herbert',
    handle: 'Herbert 🥷',
    role: 'Web Developer & Creative Director',
    bio: 'Frontend web development, community management, content creation, and visual design. The creative force behind NexShield\'s identity and communication.',
    tags: ['Web Dev', 'Community', 'Content', 'Design'],
    github: '',
    linkedin: '',
  },
  {
    name: 'Dora',
    handle: 'Dora',
    role: 'GRC Lead & Communications',
    bio: 'Governance, Risk & Compliance, security monitoring, AI security integration, and event communication. The bridge between technical teams and the outside world.',
    tags: ['GRC', 'Monitoring', 'AI Security', 'Communications'],
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
  { value: '3', label: 'Service Domains', suffix: '+' },
  { value: '100', label: 'Committed', suffix: '%' },
  { value: '0', label: 'Compromises Accepted', suffix: '' },
]
