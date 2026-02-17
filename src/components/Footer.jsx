import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye, Heart } from 'lucide-react';

const Footer = () => {
  const { content } = useLanguage();
  const [visitCount, setVisitCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const visited = sessionStorage.getItem('portfolio_visited');
        const namespace = 'chanchai-portfolio'; 
        const key = 'visits';
        
        let url;
        if (!visited) {
          // Increment count (V1 API)
          url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;
        } else {
          // just get count (V1 API)
          url = `https://api.counterapi.dev/v1/${namespace}/${key}`;
        }

        const response = await fetch(url);
        if (response.ok) {
           const data = await response.json();
           // V1 returns { count: number }
           setVisitCount(data.count);
           if (!visited) {
             sessionStorage.setItem('portfolio_visited', 'true');
           }
        } else {
             // If V1 fails (namespace not created?), try to create/up anyway?
             // Actually V1 auto-creates.
             console.warn("Counter API V1 failed");
             setVisitCount(0);
        }

      } catch {
        // Suppress error in console for development/demo if API is blocked
        // console.warn("Counter API unavailable (likely CORS or network issue):", error);
        setVisitCount(120); 
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} {content["personalInfo.name"] || "Chanchai Tasujai"}. All rights reserved.
        </div>

        {/* Tech Stack & Love */}
        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>using React & Tailwind</span>
        </div>

        {/* Visitor Counter */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
          <Eye className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {content["footer.visits"] || "Visits"}: 
          </span>
          {loading ? (
             <span className="w-8 h-4 bg-slate-200 dark:bg-slate-800 animate-pulse rounded"></span>
          ) : (
             <span className="text-sm font-bold tabular-nums text-blue-600 dark:text-blue-400">
               {visitCount ? visitCount.toLocaleString() : "..."}
             </span>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
