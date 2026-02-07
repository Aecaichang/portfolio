import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <main>
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Portfolio />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
