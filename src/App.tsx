import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "employment", "skills"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Decanter",
      description:
        "Volunteer management platform for Science Olympiad tournaments",
      tags: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Shadcn",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/kennethliu0/decanter",
      projectUrl: "https://decanter.app",
    },
    {
      title: "Remix",
      description:
        "Spotify playlist resequencer using audio features to create smooth transitions",
      tags: ["TypeScript", "React", "Vite", "GitHub Actions"],
      projectUrl: "https://kennethliu0.github.io/remix",
      githubUrl: "https://github.com/kennethliu0/remix",
    },
  ];

  const employment = [
    {
      title: "Software Engineer Intern",
      company: "LastingLearn, Inc.",
      date: "2025 - Present",
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

  const skills = [
    {
      category: "Languages",
      items: [
        {
          name: "JavaScript",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C#",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Java",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C++",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "HTML",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Git",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "VS Code",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Visual Studio",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
        },
        {
          name: "Linux",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "DevOps",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "React",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Node.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: ".NET",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg",
        },
        {
          name: "Express.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "PostgreSQL",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "SQL",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <motion.ul
            className="nav-links"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {["projects", "employment", "skills"].map((section, index) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section === "employment"
                      ? "Experience"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.span>
                  {activeSection === section && (
                    <motion.span
                      className="active-indicator"
                      layoutId="activeSection"
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--accent)",
                        borderRadius: "2px",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Kenneth Liu
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="#projects"
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/Kenneth_Liu_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </div>
        </div>
      </motion.section>

      <section id="projects" className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h3>{project.title}</h3>
                  </a>
                ) : (
                  <h3>{project.title}</h3>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-github-link"
                    aria-label="GitHub Repository"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                )}
              </div>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="employment" className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Employment History
        </motion.h2>
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {employment.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <h3>{job.title}</h3>
              <div className="company">{job.company}</div>
              <div className="date">{job.date}</div>
              <p>{job.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item-icon"
                    data-skill={skill.name.toLowerCase().replace(/\s+/g, "-")}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="skill-icon">
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        width="32"
                        height="32"
                      />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <footer className="footer">
        <div className="social-links">
          <motion.a
            href="https://github.com/kennethliu0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kennethhliu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
          <motion.a
            href="/Kenneth_Liu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Resume"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-4h8v2H8v-2zm0 8h5v2H8v-2z" />
            </svg>
          </motion.a>
        </div>
        <p>&copy; 2025 Kenneth Liu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
