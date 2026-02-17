import { useLanguage } from '../context/LanguageContext';
import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  const { content } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 bg-secondary/80 border-t border-border transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Portfolio.</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xs">
              {content["personalInfo.name"]} - Software Tester & Quality Assurance
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { id: 'facebook', icon: Facebook, url: content["personalInfo.socials.facebook"], color: 'hover:text-blue-600' },
              { id: 'linkedin', icon: Linkedin, url: content["personalInfo.socials.linkedin"], color: 'hover:text-blue-700' },
              { id: 'github', icon: Github, url: content["personalInfo.socials.github"], color: 'hover:text-slate-900' },
              { id: 'line', icon: FaLine, url: content["personalInfo.socials.line"], color: 'hover:text-green-500' },
              { id: 'email', icon: Mail, url: `mailto:${content["personalInfo.email"]}`, color: 'hover:text-red-500' },
            ].map((social) => (
              <a 
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:-translate-y-1 ${social.color} text-slate-600 dark:text-slate-300`}
                title={social.id.charAt(0).toUpperCase() + social.id.slice(1)}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            © {currentYear} {content["personalInfo.name"]}. {useLanguage().language === 'th' ? "สงวนลิขสิทธิ์" : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
