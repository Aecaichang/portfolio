import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye, Heart } from 'lucide-react';

const Footer = () => {
  const { content } = useLanguage();
  const [visitCount, setVisitCount] = useState(null);
  const [loading, setLoading] = useState(true);

  // Using a free counter API (countapi.xyz is dead, using counterapi.dev or similar if available, 
  // otherwise fallback to local/mock for demo purposes since we don't have a backend setup here)
  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Checking local storage first to prevent double counting on refresh (optional logic)
        const visited = sessionStorage.getItem('portfolio_visited');
        
        // Using a namespace unique to this user. 
        // Note: In production you might want to use your own backend/Supabase
        const namespace = 'chanchai-portfolio-v1';
        const key = 'visits';
        
        let url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`; // Increment
        if (visited) {
          url = `https://api.counterapi.dev/v1/${namespace}/${key}`; // Just read
        }

        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setVisitCount(data.count);
          sessionStorage.setItem('portfolio_visited', 'true');
        } else {
          // Fallback if API is new or fails
           console.warn("Counter API failed, using fallback");
           setVisitCount(1024); 
        }
      } catch (error) {
        console.error("Error fetching visit count:", error);
        setVisitCount(1024); // Fallback number
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
