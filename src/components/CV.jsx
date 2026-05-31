import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowLeft, Printer, Globe } from "lucide-react";

const CV = () => {
  const { content, toggleLanguage, language } = useLanguage();
  const componentRef = useRef();

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">Loading Content...</div>;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 px-6 py-4 md:px-12 md:py-8 flex flex-col items-center">
      <div className="w-full max-w-[210mm] mb-4 flex justify-between items-center print:hidden">
        <Button asChild variant="outline" size="sm" className="gap-2">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button onClick={toggleLanguage} variant="outline" size="sm" className="gap-2">
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'Switch to Thai' : 'Switch to English'}
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>

      <div 
        ref={componentRef}
        className="w-full max-w-[210mm] min-h-[297mm] bg-white text-slate-800 shadow-xl print:shadow-none p-[10mm] md:p-[15mm] mx-auto overflow-hidden print:w-full print:max-w-none print:m-0 print:p-[10mm]"
      >
        {/* Header */}
        <header className="flex justify-between items-start mb-6 border-b-2 border-slate-800 pb-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-900 mb-2">
              {content["personalInfo.name"]}
            </h1>
            <h2 className="text-xl text-blue-700 font-semibold tracking-wide uppercase">
              {content["personalInfo.title"]}
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-lg leading-relaxed">
              {content["aboutMe.paragraph1"]} {content["aboutMe.paragraph2"]}
            </p>
          </div>
          <div className="text-right space-y-1.5 text-xs md:text-sm">
             <div className="flex items-center justify-end gap-2 text-slate-600">
               <span>{content["personalInfo.phone"]}</span>
               <Phone className="w-3.5 h-3.5 text-blue-600" />
             </div>
             <div className="flex items-center justify-end gap-2 text-slate-600">
               <a href={`mailto:${content["personalInfo.email"]}`} className="hover:text-blue-600 underline-offset-2 hover:underline">
                 {content["personalInfo.email"]}
               </a>
               <Mail className="w-3.5 h-3.5 text-blue-600" />
             </div>
             <div className="flex items-center justify-end gap-2 text-slate-600">
               <span>{content["personalInfo.location"]}</span>
               <MapPin className="w-3.5 h-3.5 text-blue-600" />
             </div>
             <div className="flex items-center justify-end gap-2 text-slate-600">
               <a href={content["personalInfo.socials.linkedin"]} target="_blank" rel="noreferrer" className="hover:text-blue-600 underline-offset-2 hover:underline">
                 LinkedIn
               </a>
               <Linkedin className="w-3.5 h-3.5 text-blue-600" />
             </div>
             <div className="flex items-center justify-end gap-2 text-slate-600">
               <a href={content["personalInfo.socials.github"]} target="_blank" rel="noreferrer" className="hover:text-blue-600 underline-offset-2 hover:underline">
                 GitHub
               </a>
               <Github className="w-3.5 h-3.5 text-blue-600" />
             </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column (Main Experience) */}
          <div className="col-span-8 space-y-8">
            
            {/* Experience */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                {content["titles.experience"]}
              </h3>
              
              <div className="space-y-6">
                {content["experience"]?.map((job, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-100 border-2 border-blue-600"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900 text-base">{job.company}</h4>
                      <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{job.roles && job.roles[0]?.period ? job.roles[0].period.split('·')[0].trim() : ''}</span>
                    </div>
                    
                    {job.roles?.map((role, rIndex) => (
                      <div key={rIndex} className={rIndex > 0 ? "mt-4" : ""}>
                        <div className="flex justify-between items-center mb-1">
                          <h5 className="font-semibold text-blue-700">{role.title}</h5>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed marker:text-slate-400">
                          {role.description?.map((desc, dIndex) => (
                            <li key={dIndex}>{desc}</li>
                          ))}
                          {role.achievements && role.achievements.map((ach, aIndex) => (
                            <li key={`ach-${aIndex}`} className="italic text-slate-600">Achievement: {ach}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

             {/* Education */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                {content["titles.education"]}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {content["education"]?.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-slate-900">{edu.university}</h4>
                      {edu.year && <span className="text-xs text-slate-500">{edu.year}</span>}
                    </div>
                    <p className="text-sm text-blue-700">{edu.degree}</p>
                    {edu.honors && <p className="text-xs text-slate-500 mt-0.5">{edu.honors}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Project */}
            {content["portfolio"] && content["portfolio"][0] && (
              <section className="break-inside-avoid">
                 <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                   Recent Project
                 </h3>
                 <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <h4 className="font-bold text-slate-900">{content["portfolio"][0].title}</h4>
                   <p className="text-xs text-slate-600 mt-2 leading-relaxed mb-3">
                     {content["portfolio"][0].description}
                   </p>
                   <div className="flex flex-wrap gap-1.5">
                     {content["portfolio"][0].techStack.slice(0, 8).map((tech, i) => (
                       <Badge key={i} variant="outline" className="text-[10px] h-5 px-1.5 bg-white border-slate-200 text-slate-600 font-normal">
                         {tech}
                       </Badge>
                     ))}
                   </div>
                 </div>
              </section>
            )}

          </div>

          {/* Right Column (Skills & Info) */}
          <div className="col-span-4 space-y-8">
            
            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                Skills
              </h3>
              
              <div className="space-y-5">
                {content["skills"]?.map((skillGroup, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-xs text-slate-400 uppercase tracking-wider mb-2">
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item, iIndex) => (
                        <span 
                          key={iIndex} 
                          className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                Certifications
              </h3>
              <ul className="space-y-3">
                {content["certifications"]?.map((cert, index) => (
                  <li key={index} className="text-xs">
                    <p className="font-semibold text-slate-900">{cert.name}</p>
                    <p className="text-slate-500">{cert.issuer} • {cert.date}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
               <h3 className="text-lg font-bold uppercase tracking-widest border-l-4 border-blue-600 pl-3 mb-4 text-slate-800">
                Key Attributes
              </h3>
              <div className="space-y-2">
                 <div className="text-xs text-slate-600">
                   <strong className="text-slate-900 block font-semibold mb-0.5">Problem Solver</strong>
                   Turning complex requirements into actionable technical plans.
                 </div>
                 <div className="text-xs text-slate-600">
                   <strong className="text-slate-900 block font-semibold mb-0.5">Detail Oriented</strong>
                   QA background ensures high attention to edge cases and quality.
                 </div>
                 <div className="text-xs text-slate-600">
                   <strong className="text-slate-900 block font-semibold mb-0.5">Adaptive Learner</strong>
                   Quickly mastering new stacks (Supabase, Deno, AI Agents).
                 </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-[10px] text-slate-400 flex justify-between">
           <span>References available upon request</span>
           <span>Generated dynamically from Portfolio Website</span>
        </div>
      </div>


    </div>
  );
};

export default CV;
