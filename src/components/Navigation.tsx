import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    // Set a default value on mount, in case the user doesn't scroll initially
    // and the page loads somewhere in the middle.
    handleScroll(); 
    
    function handleScroll() {
      const sections = ['projects', 'employment', 'skills'];
      // Add a buffer so the active state changes a bit earlier
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
      // If no section is in view (e.g., at the very top or bottom), you might want a default
      if (!currentSection) {
         // Default to projects if scroll is near top
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
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {['projects', 'employment', 'skills'].map((section, index) => (
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
                className={activeSection === section ? 'active' : ''}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {section === 'employment' ? 'Experience' : section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.span>
                {activeSection === section && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeSection"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}