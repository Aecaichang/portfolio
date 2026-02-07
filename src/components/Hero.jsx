import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button"

const Hero = () => {
  const { content, language } = useLanguage();

  const calculateAge = (birthDateString) => {
    if (!birthDateString) return "";
    const birthDate = new Date(birthDateString);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      // new Date(year, month, 0) gets the last day of the previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      const prevMonthDays = prevMonth.getDate();
      // Handle edge cases where birth day > days in previous month
      const birthDay = birthDate.getDate();
      const daysInPrevMonthFromBirth = Math.min(birthDay, prevMonthDays);
      
      days = (prevMonthDays - daysInPrevMonthFromBirth) + today.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (language === 'th') {
      return `${years} ปี ${months} เดือน ${days} วัน`;
    } else {
      return `${years} Years ${months} Months ${days} Days`;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-center md:text-left space-y-6 animate-in slide-in-from-bottom-5 duration-1000 fade-in">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-slate-600 mb-2">
              {content === 'th' ? "สวัสดี, ผมชื่อ" : "Hello, I'm"}
            </h3>
            <h1 className="text-5xl md:text-7xl font-extrabold pb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {content["personalInfo.name"]}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-slate-600 mt-6">
            <a href={`mailto:${content["personalInfo.email"]}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <span>📧</span> {content["personalInfo.email"]}
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <p className="flex items-center gap-2">
              <span>📍</span> {content["personalInfo.location"]}
            </p>
            <span className="hidden md:inline text-slate-300">|</span>
            <p className="flex items-center gap-2">
              <span>🎂</span> {calculateAge(content["personalInfo.birthDate"])}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all">
              {content["nav.downloadCv"]}
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg border-2 border-slate-300 hover:border-slate-800 transition-all">
              {content["nav.contact"]}
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end animate-in zoom-in duration-1000 delay-200 fade-in">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center">
               {/* Replace with actual image later */}
               {/* <span className="text-slate-300 text-xl font-medium">Your Image</span> */}
               <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" onError={(e) => {e.target.onerror = null; e.target.src = "https://placehold.co/400x400?text=Profile"}} />
            </div>
            {/* Decorative circle */}
            <div className="absolute -z-10 top-10 -right-10 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
