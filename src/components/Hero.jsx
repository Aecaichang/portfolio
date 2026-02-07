import { useLanguage } from '../context/LanguageContext';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, MapPin, Cake, Phone, Facebook, Linkedin, Github } from "lucide-react";
import { FaLine } from "react-icons/fa";

const Hero = () => {
  const { content, language } = useLanguage();

  // Mouse tracking for profile image tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const calculateAge = (birthDateString) => {
    if (!birthDateString) return "";
    const birthDate = new Date(birthDateString);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      const prevMonthDays = prevMonth.getDate();
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
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-hero-from to-hero-to overflow-hidden transition-colors duration-500">
      <div id="hero-container" className="container mx-auto px-4 lg:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <motion.div 
          id="hero-text-content"
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div id="hero-title-group">
            <motion.h3 
              id="hero-greeting"
              className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-2 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {language === 'th' ? "สวัสดี, ผมชื่อ" : "Hello, I’m"}
            </motion.h3>
            <motion.h1 
              id="hero-name"
              className="text-5xl md:text-7xl font-extrabold pb-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {content["personalInfo.name"]}
            </motion.h1>
          </div>

          <motion.div 
            id="hero-contact-info"
            className="flex flex-wrap gap-x-6 gap-y-3 items-center justify-center md:justify-start text-slate-600 dark:text-slate-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a id="hero-email" href={`mailto:${content["personalInfo.email"]}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{content["personalInfo.email"]}</span>
            </a>
            <a id="hero-phone" href={`tel:${content["personalInfo.phone"]}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <Phone className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tabular-nums">{content["personalInfo.phone"]}</span>
            </a>
            <div id="hero-location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-medium">{content["personalInfo.location"]}</span>
            </div>
            <div id="hero-age-group" className="flex items-center gap-2">
              <Cake className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <span id="hero-age" className="cursor-help border-b border-dotted border-slate-400 dark:border-slate-500 tabular-nums text-sm font-medium">
                    {calculateAge(content["personalInfo.birthDate"])}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  {language === 'th' ? "อายุจริงในปัจจุบัน" : "Current exact age"}
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>

          <motion.div 
            id="hero-social-links"
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {[
              { id: 'facebook', icon: Facebook, url: content["personalInfo.socials.facebook"], color: 'hover:text-blue-600 dark:hover:text-blue-400' },
              { id: 'linkedin', icon: Linkedin, url: content["personalInfo.socials.linkedin"], color: 'hover:text-blue-700 dark:hover:text-blue-400' },
              { id: 'github', icon: Github, url: content["personalInfo.socials.github"], color: 'hover:text-slate-900 dark:hover:text-white' },
              { id: 'line', icon: FaLine, url: content["personalInfo.socials.line"], color: 'hover:text-green-500 dark:hover:text-green-400' },
            ].map((social) => (
              <a 
                key={social.id}
                id={`hero-social-${social.id}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 transition-[transform,box-shadow,color,background-color,border-color] duration-300 hover:shadow-md hover:-translate-y-1 ${social.color} text-slate-700 dark:text-slate-300`}
                title={social.id.charAt(0).toUpperCase() + social.id.slice(1)}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          id="hero-image-content"
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            id="hero-image-wrapper" 
            className="relative w-64 h-64 md:w-96 md:h-96"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div 
              id="hero-image-blur"
              className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <div id="hero-profile-container" className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
               <img 
                 id="hero-profile-img"
                 src="/images/profile.jpg" 
                 alt="Profile" 
                 width={400}
                 height={400}
                 className="w-full h-full object-cover" 
                 loading="eager"
                 onError={(e) => {e.target.onerror = null; e.target.src = "https://placehold.co/400x400?text=Profile"}} 
               />
            </div>
            <motion.div 
              id="hero-deco-pink"
              className="absolute -z-10 top-10 -right-10 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-30"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-20px)" }}
            ></motion.div>
            <motion.div 
              id="hero-deco-blue"
              className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transform: "translateZ(-40px)" }}
            ></motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
