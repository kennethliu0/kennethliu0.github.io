export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  projectUrl?: string;
}

export interface Employment {
  title: string;
  company: string;
  date: string;
}

export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  resume: string;
}

export const projects: Project[] = [
  {
    title: 'Vista',
    description: 'Bubble Tea-based TUI in Go to monitor multiple services simultaneously with per-service and interleaved log buffers.',
    tags: ['Go', 'Bubble Tea'],
    githubUrl: 'https://github.com/kennethliu0/vista'
  },
  {
    title: 'BobaFinder',
    description: 'Multi-agent market entry research system using LangGraph Swarm to determine optimal locations for a boba chain restaurant.',
    tags: ['Python', 'LangGraph', 'LangChain', 'MongoDB Atlas'],
    githubUrl: 'https://github.com/kennethliu0/bobafinder'
  },
  {
    title: 'Decanter',
    description: 'Volunteer management platform for Science Olympiad tournaments with Google OAuth, attracting 75+ users in the first month. 97% test coverage with Vitest.',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/kennethliu0/decanter',
    projectUrl: 'https://decanter.app'
  },
  {
    title: 'Remix',
    description: 'Spotify playlist resequencer that creates smooth transitions based on audio features, reducing average Euclidean distance between feature vectors by 58%.',
    tags: ['TypeScript', 'React', 'Vite', 'GitHub Actions'],
    projectUrl: 'https://kennethliu0.github.io/remix',
    githubUrl: 'https://github.com/kennethliu0/remix'
  }
];

export const employment: Employment[] = [
  {
    title: "Incoming Software Engineer Intern",
    company: "Stripe",
    date: "Jun. 2026 – Sep. 2026",
  },
  {
    title: "Backend Software Engineer",
    company: "Stanford Carta",
    date: "Jan. 2026 – Present",
  },
  {
    title: "Software Engineer Intern",
    company: "LastingLearn, Inc.",
    date: "Oct. 2025 – Jan. 2026",
  },
  {
    title: "Software Engineer Intern",
    company: "InternNest, Inc.",
    date: "2024 - 2025",
  },
  {
    title: "Software Engineer Intern",
    company: "Baker Engineering and Risk Consultants, Inc.",
    date: "Jun. 2024 – Aug. 2024",
  },
  {
    title: "Teaching Assistant",
    company: "ScioVirtual Foundation",
    date: "2023 - 2025",
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Go', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'VS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
      { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Azure DevOps', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: '.NET', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg' },
      { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Bubble Tea', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  }
];

export const socialLinks: SocialLinks = {
  github: 'https://github.com/kennethliu0',
  linkedin: 'https://linkedin.com/in/kennethhliu',
  resume: '/Kenneth_Liu_resume.pdf'
};

export const about =
  "I'm a computer science student at Stanford and a full-stack developer. I'm a backend engineer on Stanford Carta, a data-driven course planning platform. This summer, I'll be joining Stripe as a software engineer intern.";
