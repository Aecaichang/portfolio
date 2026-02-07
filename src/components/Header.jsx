import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Portfolio.
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-medium text-slate-600">
            {['home', 'experience', 'education', 'skills', 'portfolio'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  onClick={(e) => scrollToSection(e, item)}
                  className="hover:text-blue-600 transition-colors relative group"
                >
                  {content[`nav.${item}`]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button 
          variant="ghost" 
          onClick={toggleLanguage}
          className="rounded-full font-bold text-slate-700 hover:bg-slate-100"
        >
          {language === 'en' ? '🇺🇸 EN' : '🇹🇭 TH'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
