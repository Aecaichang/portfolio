import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <div className="App min-h-screen bg-background text-foreground transition-colors duration-300">
            <Header />
            <Hero />
            <main>
              <Experience />
              <Education />
              <Certifications />
              <Skills />
              <Portfolio />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
