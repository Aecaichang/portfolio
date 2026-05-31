import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { TooltipProvider } from "@/components/ui/tooltip";

const CV = lazy(() => import('./components/CV'));

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cv"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen flex items-center justify-center">
                        Loading CV…
                      </div>
                    }
                  >
                    <CV />
                  </Suspense>
                }
              />
            </Routes>
          </Router>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
