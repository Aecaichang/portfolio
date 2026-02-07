import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          id="header-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-blue-600 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          Portfolio.
        </motion.div>
        
        <nav id="main-nav" className="hidden md:block">
          <ul className="flex space-x-8 font-medium text-slate-600 dark:text-slate-300">
            {['home', 'experience', 'education', 'skills', 'portfolio'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  id={`nav-link-${item}`}
                  href={`#${item}`} 
                  onClick={(e) => scrollToSection(e, item)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 relative group"
                >
                  {content[`nav.${item}`]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-[width] duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
 
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button 
              id="btn-theme-toggle"
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button 
              id="btn-language-toggle"
              variant="ghost" 
              onClick={toggleLanguage}
              className="rounded-full font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {language === 'en' ? '🇺🇸 EN' : '🇹🇭 TH'}
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
