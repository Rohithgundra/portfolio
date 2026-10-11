export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "all" | "agentic-ai" | "document-ai" | "quality-ai" | "enterprise";
  categoryLabel: string;
  domain: string;
  org: string;
  brief: string;
  role: string;
  focus: string;
  metrics?: string;
  architecture: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  delivers: string;
  tags: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  subCompany?: string;
  location: string;
  when: string;
  current?: boolean;
  teamSize?: string;
  summary: string;
  bullets: string[];
  projectHighlight?: {
    name: string;
    details: string;
  };
  tags: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: { name: string; highlight?: boolean }[];
}

export const profile = {
  name: "Rohith Reddy",
  role: "Technical Architect | Generative AI",
  secondaryRole: "Lead SDET & AI Platform Architect",
  location: "Hyderabad, Telangana, India",
  email: "Rohith.Gundra@Hotmail.com",
  phone: "+91 9700581851",
  rawPhone: "09700581851",
  linkedin: "https://www.linkedin.com/in/rohithgundra",
  linkedinLabel: "linkedin.com/in/rohithgundra",
  headline:
    "Architecting enterprise Generative AI systems, multi-agent workflows, intelligent document processing, and AI-assisted quality engineering.",
  summary:
    "Results-driven Technical Architect and Lead SDET with 10+ years of experience across enterprise application architecture, quality engineering, and AI-powered platforms. Experienced in designing multi-agent AI systems, conversational voice agents (Deepgram, ElevenLabs), intelligent document extraction workflows, and cloud-native microservices (FastAPI, Python). Skilled in Python, FastAPI, FastMCP, LangChain, LangGraph, RAG, AWS, Kubernetes, MEAN stack, enterprise integrations (ServiceNow). Focused on translating complex business needs into maintainable solutions and improving engineering delivery through automation and AI.",
  availabilityStatus: "Available for Architecture & Lead Opportunities",
};

export function getAssetUrl(path: string): string {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
}

export function getPageUrl(path: string): string {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  if (!cleanPath) return base || "/";
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
}

export const executiveHighlights = [
  { value: "10+", label: "Years Experience", sublabel: "Enterprise Architecture & SDET" },
  { value: "3", label: "Enterprise AI Platforms", sublabel: "Agentic, IDP & QA Copilot" },
  { value: "20", label: "Max Engineers Led", sublabel: "Squad Leadership (10-20 engineers)" },
  { value: "60%", label: "QA Efficiency Gain", sublabel: "BDD Automation Acceleration" },
];

export const corePrinciples = [
  {
    title: "Orchestrated Multi-Agent Systems",
    text: "Building stateful agents using LangGraph and LangChain that integrate seamlessly with enterprise systems like ServiceNow, MCP tools, and telephony.",
    icon: "network",
  },
  {
    title: "Deterministic Document Processing",
    text: "Extraction without validation is a liability. Pipelines must extract, validate business logic, and reliably update core enterprise systems like P21 ERP.",
    icon: "file-check",
  },
  {
    title: "Human-in-the-Loop Quality Governance",
    text: "Leveraging LLMs for sprint risk intelligence and automated test generation while maintaining human accountability before fixes reach production.",
    icon: "shield-check",
  },
];

export const architecturalPractices = [
  {
    number: "01",
    title: "Domain Analysis & System Design",
    text: "Translating ambiguous enterprise requirements into clear technical architecture, service boundaries, and stateful agent interaction models.",
  },
  {
    number: "02",
    title: "AI Integration & Hybrid Roadmaps",
    text: "Balancing probabilistic LLM intelligence with deterministic business rules, MCP integrations, and strict validation boundaries.",
  },
  {
    number: "03",
    title: "Squad Leadership & Mentoring",
    text: "Guiding engineering squads of 10–20 developers on agentic frameworks, voice orchestration, data pipelines, and clean code standards.",
  },
  {
    number: "04",
    title: "CI/CD & Release Confidence",
    text: "Establishing automated CI/CD pipelines via GitHub Actions and Jenkins, combined with AI-assisted release-readiness dashboards.",
  },
];

export const projects: Project[] = [

  {
    id: "genix-nova",
    name: "Genix Nova",
    tagline: "Multi-Agent AI Platform for Chat & Voice",
    category: "agentic-ai",
    categoryLabel: "Agentic AI & Voice",
    domain: "Enterprise Customer Support",
    org: "Solugenix",
    brief:
      "A configurable enterprise platform for creating and orchestrating autonomous AI agents across chat and voice customer support workflows.",
    role: "Technical Architect & Squad Lead",
    focus: "Agent orchestration, RAG retrieval, MCP tool integrations, and operational observability.",
    metrics: "Configurable agent deployment across voice & chat with real-time observability",
    architecture: [
      "Modular agent creation framework allowing configurable agents per support use case.",
      "High-performance Python and FastAPI backend microservices orchestrating stateful agent lifecycles.",
      "LangChain and LangGraph for complex, multi-turn stateful conversational reasoning.",
      "Real-time voice processing integrating Deepgram for low-latency STT and ElevenLabs for natural TTS voice synthesis.",
      "FastMCP and Model Context Protocol (MCP) server integration to securely invoke ServiceNow and internal tools.",
      "Scalable containerized deployment on AWS and Kubernetes, with AWS CloudWatch monitoring.",
    ],
    workflowSteps: [
      { step: "01", title: "Customer Interaction", desc: "Omnichannel entry via telephony stream (Deepgram STT & ElevenLabs TTS) or chat." },
      { step: "02", title: "LangGraph State Machine", desc: "Python & FastAPI service executes intent routing, agent delegation, and RAG lookup." },
      { step: "03", title: "FastMCP Tool Execution", desc: "FastMCP tools execute ticket actions in ServiceNow and trigger internal APIs." },
      { step: "04", title: "Observability", desc: "CloudWatch telemetry on AWS & Kubernetes tracks agent latency and resolution metrics." },
    ],
    delivers:
      "Enterprise support operations can deploy custom chat or voice agents, connect them directly to ServiceNow tickets and verified knowledge bases, and monitor complete operations in real time.",
    tags: ["LangGraph", "Python", "FastAPI", "FastMCP", "Deepgram", "ElevenLabs", "AWS", "Kubernetes", "ServiceNow", "CloudWatch"],
    featured: true,
  },
  {
    id: "doc-ex",
    name: "Doc-Ex",
    tagline: "Multi-Tenant Intelligent Document Processing",
    category: "document-ai",
    categoryLabel: "Document Intelligence",
    domain: "FinTech & Business Operations",
    org: "Multi-Tenant Platform",
    brief:
      "An automated document extraction, validation, and downstream enterprise business processing platform.",
    role: "Platform Architect",
    focus: "Batch ingestion pipelines, LLM-based field extraction, deterministic validation, and ERP integration.",
    metrics: "End-to-end ingestion to Prophet 21 (P21) ERP automation",
    architecture: [
      "Multi-tenant ingestion layer handling diverse document types including invoices and bank statements.",
      "Flexible ingestion mechanisms supporting scheduled email batches and on-demand manual uploads.",
      "Structured field extraction converting unstructured scanned documents into validated JSON payloads.",
      "Strict data validation engine ensuring mathematical consistency, vendor matching, and field-level sanity.",
      "Direct ERP integration updating records in Prophet 21 (P21) ERP system without manual data entry.",
    ],
    workflowSteps: [
      { step: "01", title: "Ingestion", desc: "Scheduled email ingestion service and portal uploads collect invoices & bank statements." },
      { step: "02", title: "Intelligent Extraction", desc: "Document processing pipelines extract line items, amounts, tax, and vendor data." },
      { step: "03", title: "Field Validation", desc: "Deterministic business rules validate totals, line arithmetic, and account references." },
      { step: "04", title: "ERP Handoff", desc: "Clean, verified data automatically synchronizes with the Prophet 21 (P21) ERP system." },
    ],
    delivers:
      "Transforms unstructured, disparate financial documents into pristine, verified transactional data ready for downstream ERP consumption with zero manual transcription errors.",
    tags: ["Document AI", "Multi-Tenant", "Batch Ingestion", "Field Validation", "P21 ERP", "ETL Pipelines"],
    featured: true,
  },
  {
    id: "qualit-ai",
    name: "Qualit AI",
    tagline: "AI Copilot for Quality Engineering & Release Readiness",
    category: "quality-ai",
    categoryLabel: "AI Quality Engineering",
    domain: "Software Quality & Release Governance",
    org: "Sprint Intelligence",
    brief:
      "An AI-assisted quality engineering copilot for sprint risk intelligence, automated test generation, execution analytics, and release readiness.",
    role: "Product Architect & Quality Engineering Lead",
    focus: "Sprint history intelligence, test generation, flaky test analytics, and Human-in-the-Loop governance.",
    metrics: "Consolidates sprint risks, flaky tests, and release signals into a single dashboard",
    architecture: [
      "Direct integration with Azure DevOps (ADO) and Jira to analyze historical stories, defects, and sprint velocity.",
      "Risk-based test planning producing prioritized test plans and manual test-case matrices.",
      "Boilerplate automation code generation accelerating SDET script creation across target frameworks.",
      "Flaky-test investigation engine analyzing execution traces and failure clustering.",
      "Human-in-the-Loop (HITL) review checkpoint requiring engineer approval before fix acceptance.",
      "Release-readiness dashboard consolidating test coverage, defect gravity, and release risk signals.",
    ],
    workflowSteps: [
      { step: "01", title: "Sprint Risk Analysis", desc: "Connects with Azure DevOps & Jira to evaluate code churn, defects, and sprint scope." },
      { step: "02", title: "Test Generation", desc: "Generates risk-targeted test plans and framework-ready automation boilerplate." },
      { step: "03", title: "Execution & Flake Detection", desc: "Monitors test executions and surfaces flaky test patterns with root cause insights." },
      { step: "04", title: "HITL Release Sign-off", desc: "Human-in-the-loop sign-off on release readiness dashboard before production rollout." },
    ],
    delivers:
      "Replaces disjointed testing spreadsheets with an intelligent quality command center, driving proactive defect mitigation while keeping human engineers in control.",
    tags: ["Azure DevOps", "Jira", "Test Generation", "Flaky-Test Analytics", "HITL Review", "Release Governance"],
    featured: true,
  },
  {
    id: "irctc-imudra",
    name: "IRCTC Imudra FinTech QA",
    tagline: "Mobile & Web End-to-End Test Automation for High-Scale FinTech",
    category: "enterprise",
    categoryLabel: "FinTech Engineering",
    domain: "FinTech & Digital Payments",
    org: "MatchMove Pte Ltd",
    brief:
      "Comprehensive quality engineering and automated testing framework for high-traffic mobile payment wallet IRCTC Imudra.",
    role: "Senior Quality Engineer",
    focus: "Android and web automation frameworks, end-to-end regression, and defect lifecycle validation.",
    metrics: "End-to-end test automation and defect validation for million-user payment workflows",
    architecture: [
      "Maintained and enhanced Android and web automation frameworks using Appium and Selenium.",
      "Conducted extensive end-to-end functional and regression testing across mobile payment flows.",
      "Validated complex defect fixes, edge cases, and transaction reliability under diverse conditions.",
      "Drove requirements analysis and facilitated cross-functional knowledge transfer sessions.",
    ],
    workflowSteps: [
      { step: "01", title: "Payment Workflow Testing", desc: "Verified critical digital wallet registration, KYC, and payment transactions." },
      { step: "02", title: "Appium Android Suite", desc: "Executed automated test suites across Android devices to ensure release stability." },
      { step: "03", title: "Defect Validation", desc: "Tracked defects, validated fixes, and provided regular progress reports to stakeholders." },
    ],
    delivers:
      "Ensured zero-defect transaction integrity and high usability across a massive public-facing mobile wallet platform.",
    tags: ["Appium", "Android Automation", "Selenium", "FinTech", "E2E Testing", "Defect Lifecycle"],
    featured: false,
  },
  {
    id: "sprint-deloitte",
    name: "Sprint Delivery BDD Automation",
    tagline: "Enterprise BDD Automation Framework from the Ground Up",
    category: "quality-ai",
    categoryLabel: "Enterprise Automation",
    domain: "Enterprise Telecommunications & Cloud",
    org: "Deloitte (Rite Software Solutions)",
    brief:
      "Enterprise test automation framework engineered from scratch to accelerate quality delivery cycles and eliminate release bottlenecks.",
    role: "QA Lead",
    focus: "Framework architecture, BDD implementation, regression test governance, and team leadership.",
    metrics: "Accelerated task completion by 60% through automation",
    architecture: [
      "Engineered a scalable BDD test automation framework from scratch across web and mobile platforms.",
      "Implemented comprehensive automated regression test suites reducing manual validation turnaround.",
      "Formulated rigorous test plans, procedures, and standardized defect-tracking protocols.",
      "Established real-time test metric reporting for executive stakeholders and QA sign-off gates.",
    ],
    workflowSteps: [
      { step: "01", title: "BDD Feature Modeling", desc: "Translated user stories into structured Cucumber feature scenarios." },
      { step: "02", title: "Automated Suite", desc: "Executed cross-platform web and mobile automation suites across regression runs." },
      { step: "03", title: "Metrics & Sign-off", desc: "Automated test status reporting for stakeholder review and final QA sign-off." },
    ],
    delivers:
      "Accelerated delivery task completion by 60%, establishing reliable regression confidence and standardized BDD test practices across the organization.",
    tags: ["BDD", "Cucumber", "Web & Mobile Automation", "Test Strategy", "Stakeholder Reporting"],
    featured: false,
  },
  {
    id: "masterworks-cloud",
    name: "Masterworks Cloud Enterprise QA",
    tagline: "Cloud Capital Program Management QA & Team Leadership",
    category: "enterprise",
    categoryLabel: "Cloud Enterprise",
    domain: "Capital Infrastructure & Cloud Management",
    org: "Aurigo Software Technologies",
    brief:
      "Robust quality assurance, regression test governance, and CI/CD pipeline monitoring for Masterworks Cloud enterprise platform.",
    role: "Senior Quality Engineer (Acting Lead)",
    focus: "Leading a squad of 8 QA engineers, CI/CD monitoring, sanity/regression governance, and QA sign-off.",
    metrics: "Led 8 QA engineers across automation and manual streams",
    architecture: [
      "Directed and mentored a team of eight QA engineers across automated and manual testing streams.",
      "Supervised sanity, exploratory, and full regression test execution for cloud releases.",
      "Integrated testing workflows with continuous integration pipelines for real-time build health monitoring.",
      "Interfaced with engineering leads and product managers to deliver transparent QA sign-offs.",
    ],
    workflowSteps: [
      { step: "01", title: "Team Coordination", desc: "Managed test distribution and execution schedules for 8 QA engineers." },
      { step: "02", title: "CI/CD Monitoring", desc: "Monitored build pipelines and gated pull requests based on automated test results." },
      { step: "03", title: "Release Sign-off", desc: "Conducted sanity and regression testing to provide executive QA sign-off." },
    ],
    delivers:
      "Maintained rock-solid reliability for mission-critical capital infrastructure management software through disciplined team leadership and CI/CD governance.",
    tags: ["Leadership (8 QA Engineers)", "CI/CD Monitoring", "Sanity Testing", "Regression Suite", "Enterprise Cloud"],
    featured: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "solugenix",
    title: "Technical Architect",
    company: "Solugenix India Pvt Ltd",
    location: "Hyderabad, India",
    when: "Sep 2023 — Present",
    current: true,
    teamSize: "5 Engineers",
    summary:
      "Architecting and leading engineering delivery for enterprise Generative AI systems, conversational voice agents, and cloud microservices. Directing a squad of 5 engineers across multi-agent orchestration, FastMCP integrations, and CI/CD pipelines.",
    bullets: [
      "Architect and lead development of AI-powered enterprise applications, multi-agent platforms, and agentic workflows.",
      "Engineer asynchronous backend microservices using Python and FastAPI for stateful multi-turn agent interactions and tool invocations.",
      "Design and orchestrate multi-agent workflows using LangChain and LangGraph to manage complex, stateful enterprise processes.",
      "Build low-latency voice AI agents integrating Deepgram (STT) and ElevenLabs (TTS) over telephony and customer support streams.",
      "Implement FastMCP and Model Context Protocol (MCP) server integrations to securely interface AI agents with ServiceNow ticketing and internal APIs.",
      "Architect containerized deployments on AWS and Kubernetes with centralized AWS CloudWatch monitoring and distributed telemetry.",
      "Lead and mentor a cross-functional squad of 5 engineers; drive system design, architectural spikes, sprint planning, and code quality governance.",
      "Establish automated CI/CD pipelines using GitHub Actions and Jenkins to accelerate release cadence and test automation.",
    ],
    projectHighlight: {
      name: "Genix Nova & Doc-Ex",
      details: "Delivered configurable multi-agent platform for chat/voice and multi-tenant document processing with P21 ERP integration.",
    },
    tags: ["Python", "FastAPI", "FastMCP", "LangGraph", "Deepgram", "ElevenLabs", "AWS", "Kubernetes", "ServiceNow", "Team Leadership (5 Eng)"],
  },
  {
    id: "deloitte",
    title: "QA Lead",
    company: "Deloitte",
    subCompany: "Rite Software Solutions",
    location: "Hyderabad, India",
    when: "Mar 2022 — Sep 2023",
    current: false,
    teamSize: "5 QA Analysts",
    summary:
      "Led five QA analysts across web and mobile testing. Implemented BDD automation from the ground up, accelerating task completion by 60% on the Sprint project.",
    bullets: [
      "Led and mentored a team of five QA analysts across web and mobile testing; developed automation strategies, test plans, and procedures.",
      "Implemented ground-up BDD automation using Cucumber, Java, and Selenium, driving standardized test coverage.",
      "Tracked quality metrics, communicated test status to stakeholders, and mentored team members.",
      "Accelerated task completion by 60% through automation on the Sprint delivery project.",
    ],
    projectHighlight: {
      name: "Sprint Delivery Automation",
      details: "60% task acceleration achieved through ground-up BDD automation and structured regression governance.",
    },
    tags: ["BDD", "Cucumber", "Selenium", "Java", "Team Leadership (5 QA)", "60% Acceleration"],
  },
  {
    id: "matchmove",
    title: "Senior Quality Engineer",
    company: "MatchMove Pte Ltd",
    location: "Hyderabad, India",
    when: "Jan 2021 — Nov 2021",
    current: false,
    summary:
      "Owned Android and web automation and end-to-end testing for the IRCTC Imudra digital payment wallet, ensuring high reliability under high user traffic.",
    bullets: [
      "Developed and executed manual and automated tests for mobile and web applications.",
      "Maintained Android and web automation frameworks using Appium and Selenium.",
      "Created and executed test cases, reported defects and validated fixes, and performed regression testing for IRCTC Imudra.",
      "Maintained close stakeholder communication on testing progress and release readiness.",
    ],
    projectHighlight: {
      name: "IRCTC Imudra",
      details: "End-to-end test automation and defect verification for high-scale digital payment and wallet flows.",
    },
    tags: ["Appium", "Android Automation", "Selenium", "FinTech", "E2E Testing", "Defect Lifecycle"],
  },
  {
    id: "aurigo",
    title: "Senior Quality Engineer (Acting Lead)",
    company: "Aurigo Software Technologies",
    location: "Bengaluru / Hyderabad, India",
    when: "Jun 2019 — Jan 2021",
    current: false,
    teamSize: "8 QA Engineers",
    summary:
      "Led a team of eight QA engineers on Masterworks Cloud, orchestrating sanity, regression, exploratory testing, CI/CD monitoring, and QA sign-off.",
    bullets: [
      "Directed and mentored an engineering squad of eight QA engineers across automated and manual testing streams.",
      "Supervised sanity, exploratory, and full regression test execution for Masterworks Cloud enterprise platform releases.",
      "Integrated testing workflows with continuous integration pipelines for real-time build health monitoring and PR gating.",
      "Managed QA activities for Masterworks Cloud enterprise software, ensuring reliable release milestones and sign-offs.",
    ],
    projectHighlight: {
      name: "Masterworks Cloud",
      details: "Directed test execution and release gating across 8 engineers for enterprise cloud infrastructure.",
    },
    tags: ["Team Leadership (8 QA Engineers)", "CI/CD Monitoring", "Sanity Testing", "Regression", "Cloud SaaS"],
  },
  {
    id: "ea",
    title: "Senior QA Analyst",
    company: "Electronic Arts (EA)",
    location: "Hyderabad, India",
    when: "Oct 2016 — Jun 2019",
    current: false,
    summary:
      "Conducted functional, regression, usability, and exploratory testing for flagship mobile games, collaborating closely with development and game design teams.",
    bullets: [
      "Performed functional, regression, usability, and exploratory testing for mobile games.",
      "Tracked and managed defects throughout their lifecycle, collaborating directly with engineering and design teams.",
      "Conducted device compatibility analysis across diverse mobile hardware profiles and operating systems.",
    ],
    tags: ["Mobile Gaming QA", "Exploratory Testing", "Defect Management", "Cross-Device Validation"],
  },
  {
    id: "pole-to-win",
    title: "Test Engineer",
    company: "Pole To Win International",
    location: "Hyderabad, India",
    when: "Sep 2014 — Sep 2016",
    current: false,
    summary:
      "Created and executed test cases, conducted functional and usability testing for mobile games, and provided consistent defect reporting to stakeholders.",
    bullets: [
      "Created and executed test cases and conducted functional, regression, usability, and exploratory testing for mobile games.",
      "Tracked defects, participated in requirement and design discussions, and provided status updates to stakeholders.",
    ],
    tags: ["Test Case Design", "Functional Testing", "Regression", "Usability"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & Agentic Systems",
    subtitle: "Stateful agents, voice pipelines, and Model Context Protocol",
    icon: "bot",
    skills: [
      { name: "LangChain", highlight: true },
      { name: "LangGraph", highlight: true },
      { name: "FastMCP", highlight: true },
      { name: "Deepgram (Voice STT)", highlight: true },
      { name: "ElevenLabs (Voice TTS)", highlight: true },
      { name: "RAG Architectures", highlight: true },
      { name: "MCP Integrations", highlight: true },
      { name: "Intelligent Document Processing", highlight: true },
      { name: "Prompt Engineering", highlight: false },
    ],
  },
  {
    title: "Backend, APIs & Cloud Architecture",
    subtitle: "High-performance Python microservices, containers, and cloud",
    icon: "server",
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "AWS", highlight: true },
      { name: "Kubernetes", highlight: true },
      { name: "Docker Containers", highlight: false },
      { name: "Microservices", highlight: false },
      { name: "RESTful APIs", highlight: false },
    ],
  },
  {
    title: "Full Stack & Web Engineering",
    subtitle: "Modern application frameworks and enterprise programming",
    icon: "code",
    skills: [
      { name: "MEAN Stack", highlight: true },
      { name: "Angular", highlight: true },
      { name: "Node.js", highlight: false },
      { name: "Express.js", highlight: false },
      { name: "MongoDB", highlight: false },
      { name: "TypeScript", highlight: true },
      { name: "Core Java", highlight: true },
      { name: "C#", highlight: false },
    ],
  },
  {
    title: "Enterprise Platforms & Observability",
    subtitle: "Operational tools, ticketing systems, and infrastructure",
    icon: "layers",
    skills: [
      { name: "ServiceNow", highlight: true },
      { name: "AWS CloudWatch", highlight: true },
      { name: "Prophet 21 (P21) ERP", highlight: false },
      { name: "Azure DevOps (ADO)", highlight: true },
      { name: "Jira Software", highlight: false },
      { name: "Telephony Integration", highlight: false },
    ],
  },
  {
    title: "Quality Engineering & SDET",
    subtitle: "Scalable automated testing, BDD frameworks, and CI sign-offs",
    icon: "check-circle",
    skills: [
      { name: "Playwright", highlight: true },
      { name: "Selenium", highlight: true },
      { name: "Appium", highlight: true },
      { name: "Cucumber (BDD)", highlight: true },
      { name: "SpecFlow", highlight: false },
      { name: "Rest Assured", highlight: true },
      { name: "Flaky Test Analytics", highlight: false },
      { name: "Test Strategy & Sign-off", highlight: false },
    ],
  },
  {
    title: "Leadership & CI/CD Delivery",
    subtitle: "Engineering direction, squad mentorship, and automated release gates",
    icon: "users",
    skills: [
      { name: "Technical Architecture", highlight: true },
      { name: "Team Leadership (10–20 Eng)", highlight: true },
      { name: "GitHub Actions", highlight: true },
      { name: "Jenkins", highlight: true },
      { name: "CI/CD Pipelines", highlight: true },
      { name: "SAFe Agile Framework", highlight: false },
    ],
  },
];

export const certifications = [
  {
    title: "ISTQB Foundation Level",
    issuer: "ISTQB — International Software Testing Qualifications Board",
    year: "2023",
    badge: "Certified",
    description: "Industry-standard certification in software testing principles, test design techniques, and quality management.",
  },
  {
    title: "SAFe Agile 5 Practitioner",
    issuer: "Scaled Agile Framework (SAFe)",
    year: "2023",
    badge: "Certified",
    description: "Enterprise agility credential for scaling Lean-Agile practices, program increment delivery, and cross-functional team coordination.",
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "NorthEast Christian University",
  graduationYear: "2015",
  score: "7.83 CGPA",
};

export const recruiterSnapshot = {
  yearsExperience: "10+ Years",
  currentRole: "Technical Architect (Solugenix India Pvt Ltd)",
  primarySpecialty: "Generative AI Systems & Quality Engineering",
  leadershipExperience: "Led teams of 10 to 20 engineers across AI and QA programs",
  targetRoles: ["Technical Architect (GenAI / Enterprise)", "Staff SDET / QA Architect", "Engineering Lead / Manager"],
  locationPreference: "Hyderabad, India · Open to Hybrid & Remote",
};
