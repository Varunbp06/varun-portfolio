export const personalInfo = {
  name: "Varun B P",
  email: "varunbpvarunbp@gmail.com",
  phone: "+91-9902354121",
  location: "Tumkur, Karnataka, India",
  title: "Software Engineer | Full Stack Developer | AI Developer",
  subtitle: "Software Engineer | Full Stack Developer | AI Developer",
  tagline: "Building scalable web applications, AI-powered software solutions, and modern digital experiences.",
  summary: "Software Engineer and Full Stack Developer with hands-on experience building production-grade web applications, REST APIs, and AI-powered platforms. Proficient in React.js, Flask, Python, JavaScript, and MySQL with a strong foundation in software engineering principles, database design, and the full SDLC. Experienced in integrating AI capabilities through API-driven architectures, building normalized database schemas, and shipping maintainable, well-documented code. Seeking Software Engineer or Full Stack Developer roles where I can contribute to scalable, reliable, and user-focused software products.",
  roles: ["Software Engineer", "Full Stack Developer", "AI Developer"],
  social: {
    linkedin: "https://www.linkedin.com/in/varun-b-p-209756214/",
    github: "https://github.com/varunbp06",
    whatsapp: "https://wa.me/919902354121",
    email: "mailto:varunbpvarunbp@gmail.com"
  }
};

export const skills = {
  languages: ["Python", "JavaScript", "SQL"],
  frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Flask", "REST APIs", "API Integration"],
  databases: ["MySQL", "SQLAlchemy"],
  ai: ["Prompt Engineering", "AI Application Development", "Hugging Face API"],
  tools: ["Git", "GitHub", "Postman", "VS Code"],
  fundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "SDLC", "Agile"]
};

export const projects = [
  {
    title: "Full Stack AI Dashboard",
    tag: "AI",
    color: "#7c3aed",
    period: "Jan 2025 - Jun 2025",
    tech: ["Python", "Flask", "React.js", "Hugging Face API", "MySQL"],
    description: "An AI-augmented analytics dashboard that delivers real-time AI-generated responses via Hugging Face API integration. The system decouples frontend presentation from backend AI orchestration through a well-defined REST API layer.",
    highlights: [
      "Architected RESTful API endpoints with consistent JSON contracts and standardized HTTP status codes, enabling clean frontend-backend separation",
      "Built reusable Python service modules for Hugging Face API orchestration, request throttling, and structured error handling",
      "Maintained full version control with Git feature branching, code reviews, and semantic commit history"
    ],
    impact: "Delivered a working AI-integrated full-stack application demonstrating end-to-end API design, backend service architecture, and modern React frontend patterns."
  },
  {
    title: "Expense Tracker Application",
    tag: "Full Stack",
    color: "#f59e0b",
    period: "Jan 2025 - Mar 2025",
    tech: ["Python", "Flask", "React.js", "MySQL", "SQLAlchemy"],
    description: "A full-stack personal finance management tool with a normalized MySQL schema, RESTful backend, and interactive React frontend for tracking, categorizing, and analyzing expenses.",
    highlights: [
      "Designed a normalized MySQL schema with SQLAlchemy ORM, implementing foreign key relationships and indexed queries for fast aggregation",
      "Built server-side aggregation logic computing spending summaries and category breakdowns — reducing client-side computation to zero",
      "Validated every API endpoint through Postman integration tests, ensuring robust error handling and response consistency"
    ],
    impact: "Produced a production-quality full-stack application with a clean database architecture, zero client-side data processing, and comprehensive API validation."
  },
  {
    title: "Job Application Tracker",
    tag: "Full Stack",
    color: "#06b6d4",
    period: "2025",
    tech: ["Python", "Flask", "React.js", "MySQL"],
    description: "A centralized job search management platform enabling users to track applications, interviews, offers, and follow-ups through an intuitive Kanban-style interface backed by a structured REST API.",
    highlights: [
      "Created a normalized MySQL schema with application status workflows and search-optimized queries for real-time filtering",
      "Developed responsive React.js UI with search, filter, and sort capabilities, maintaining component state with React hooks",
      "Implemented server-side input sanitization, structured JSON error responses, and Git-based collaboration workflow"
    ],
    impact: "Built a practical, full-featured CRUD application demonstrating database design, stateful React interfaces, and clean API patterns."
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering - Artificial Intelligence & Data Science",
    institution: "Visvesvaraya Technological University (VTU)",
    location: "Karnataka, India",
    period: "Dec 2022 - May 2026",
    cgpa: "7.9/10",
    coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "Machine Learning", "Web Technologies"]
  },
  {
    degree: "Pre-University Certificate - Science (PCM)",
    institution: "Hoysala PU College",
    location: "Karnataka, India",
    period: "Apr 2020 - Apr 2022",
    cgpa: "78%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Bandeshwaraswamy Education Society",
    location: "Karnataka, India",
    period: "Oct 2018 - Nov 2019",
    cgpa: "90.56%"
  }
];

export const certifications = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: 2025,
    description: "Covered core AI concepts, machine learning workflows, and neural networks applied to AI-powered software development."
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: 2025,
    description: "Strengthened Python fundamentals including data types, control flow, functions, and object-oriented programming."
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Learn",
    year: 2025,
    description: "Studied Azure AI services, responsible AI principles, and cloud-based machine learning workflows."
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "IBM",
    year: 2025,
    description: "Explored large language models, prompt engineering techniques, and LLM integration into software development."
  }
];

export const achievements = [
  {
    title: "International Technical Presentation",
    event: "Indo-Japan Technical Exchange Event, 2024",
    description: "Selected to present an AI-powered application to international delegates, communicating system architecture and technical outcomes to a global engineering audience."
  },
  {
    title: "Technical Project Presentations",
    event: "VTU Technical Fests, 2023-2025",
    description: "Presented multiple full-stack and AI-powered software projects at university events, recognized for software design quality and real-world applicability."
  }
];
