import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    handleScroll();

    function handleScroll() {
      const sections = ['projects', 'employment', 'skills'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      if (!currentSection) {
        if (window.scrollY < 200) currentSection = 'projects';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-links animate-on-load animate-fade-in-right">
          {['projects', 'employment', 'skills'].map((section, index) => (
            <li
              key={section}
              className="animate-on-load animate-fade-in-down hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                <span className="nav-link-text">
                  {section === 'employment' ? 'Experience' : section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="active-indicator" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
