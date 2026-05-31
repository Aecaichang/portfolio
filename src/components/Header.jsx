import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { Sun, Moon, FileText, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_ITEMS = ['home', 'aboutMe', 'experience', 'education', 'skills', 'portfolio'];

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
        >
          <Button
            type="button"
            variant="link"
            onClick={(e) => scrollToSection(e, 'home')}
            className="p-0 text-2xl font-bold text-slate-900 dark:text-slate-100 no-underline hover:opacity-80"
          >
            Portfolio.
          </Button>
        </motion.div>

        {/* Desktop nav */}
        <NavigationMenu id="main-nav" className="hidden md:flex">
          <NavigationMenuList className="space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink asChild>
                  <motion.a
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    id={`nav-link-${item}`}
                    href={`#${item}`}
                    onClick={(e) => scrollToSection(e, item)}
                    className="inline-flex items-center rounded-md px-2 py-1.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {content[`nav.${item}`]}
                  </motion.a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* CV button — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden sm:block"
          >
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2 mr-2 border-primary/20 hover:bg-primary/10 hover:text-primary dark:border-primary/40 dark:text-slate-200"
            >
              <Link to="/cv" target="_blank">
                <FileText className="w-4 h-4" />
                {content['nav.downloadCv'] || "CV"}
              </Link>
            </Button>
          </motion.div>

          {/* Theme toggle */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <Button
              id="btn-theme-toggle"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
              className="rounded-full text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </motion.div>

          {/* Language toggle */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <Button
              id="btn-language-toggle"
              variant="ghost"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? "Switch language to Thai" : "Switch language to English"}
              className="rounded-full font-bold text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {language === 'en' ? '🇺🇸 EN' : '🇹🇭 TH'}
            </Button>
          </motion.div>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => scrollToSection(e, item)}
                      className="px-4 py-3 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                    >
                      {content[`nav.${item}`]}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4 px-4">
                  <Button asChild variant="outline" className="w-full gap-2">
                    <Link to="/cv" target="_blank">
                      <FileText className="w-4 h-4" />
                      {content['nav.downloadCv'] || "CV"}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
