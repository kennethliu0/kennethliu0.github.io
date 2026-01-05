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
  description: string;
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
    title: 'Decanter',
    description: 'Volunteer management platform for Science Olympiad tournaments',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Supabase', 'Shadcn', 'TailwindCSS'],
    githubUrl: 'https://github.com/kennethliu0/decanter',
    projectUrl: 'https://decanter.app'
  },
  {
    title: 'Remix',
    description: 'Spotify playlist resequencer using audio features to create smooth transitions',
    tags: ['TypeScript', 'React', 'Vite', 'GitHub Actions'],
    projectUrl: 'https://kennethliu0.github.io/remix',
    githubUrl: 'https://github.com/kennethliu0/remix'
  }
];

export const employment: Employment[] = [
  {
    title: "Software Engineer Intern",
    company: "LastingLearn, Inc.",
    date: "2025",
    description:
      "Engineered an AI-native SAT prep platform with personalized practice.",
  },
  {
    title: "Software Engineer Intern",
    company: "InternNest, Inc.",
    date: "2024 - 2025",
    description:
      "Architected a housing marketplace and event finder for summer interns.",
  },
  {
    title: "Software Engineer Intern",
    company: "Baker Engineering and Risk Consultants, Inc.",
    date: "2024",
    description:
      "Built an event tree analysis software in C#/.NET WPF with dynamic tree editing.",
  },
  {
    title: "Teaching Assistant",
    company: "ScioVirtual Foundation",
    date: "2023 - 2025",
    description:
      "Developed course content and coordinated with co-instructors to create contests, assignments, and homework.",
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
      { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
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
      { name: 'DevOps', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: '.NET', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg' },
      { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
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

export const about = "I'm a computer science student at Stanford and a full-stack developer. I am an engineering team member at Carta, a data-driven course planning site for Stanford students. I'm also currently a Software Engineer Intern at LastingLearn, helping build an AI-native SAT test preparation platform. I'm passionate about clean code, performance, and creating seamless user experiences.";
