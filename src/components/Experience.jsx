import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal, RevealTitle } from "./ui/Reveal";

const Experience = () => {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section id="experience" className="py-20 bg-secondary/50 transition-colors duration-500">
      <div id="experience-container" className="container mx-auto px-4 max-w-4xl">
        <Card className="glass-card rounded-[2.5rem] p-8 md:p-12">
          <CardContent className="p-0">
        <RevealTitle>
          <h2 id="experience-title" className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            {content["titles.experience"]}
          </h2>
        </RevealTitle>
        
        <div id="experience-list" className="space-y-8">
          {experience.map((job, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <Card id={`experience-card-${index}`} className="border-l-4 border-l-blue-600 dark:border-slate-800 dark:border-l-blue-500 hover:shadow-lg transition-[box-shadow,background-color,border-color] duration-300 dark:bg-slate-900/80">
                <CardHeader id={`experience-header-${index}`} className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle id={`experience-company-${index}`} className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-balance">
                      {job.company}
                    </CardTitle>
                    <Badge id={`experience-type-${index}`} variant="secondary" className="w-fit dark:bg-slate-800 dark:text-slate-300">
                      {job.type}
                    </Badge>
                  </div>
                  {job.location && (
                    <p id={`experience-location-${index}`} className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {job.location}
                    </p>
                  )}
                </CardHeader>
                <CardContent id={`experience-content-${index}`}>
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700 ml-2 space-y-8 py-2">
                    {job.roles.map((role, rIndex) => (
                      <div className="relative" key={rIndex} id={`experience-job-${index}-role-${rIndex}`}>
                        {/* Timeline dot */}
                        <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 dark:border-blue-500"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                          <h4 id={`experience-role-title-${index}-${rIndex}`} className="text-lg font-semibold text-slate-800 dark:text-slate-200 text-balance">{role.title}</h4>
                          <span id={`experience-role-period-${index}-${rIndex}`} className="text-sm text-slate-600 dark:text-slate-300 font-medium tabular-nums">{role.period}</span>
                        </div>
                        
                        {role.description && (
                          <div id={`experience-role-desc-${index}-${rIndex}`} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            {Array.isArray(role.description) ? (
                              <ul className="list-disc pl-5 space-y-1">
                                {role.description.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              role.description.includes('\n') ? (
                                <ul className="list-disc pl-5 space-y-1">
                                  {role.description.split('\n').map((item, i) => (
                                    <li key={i}>{item.replace(/^•\s*/, '')}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{role.description}</p>
                              )
                            )}
                          </div>
                        )}

                        {Array.isArray(role.achievements) && role.achievements.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                              {content["titles.keyAchievements"] || "Key Achievements"}
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                              {role.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {Array.isArray(role.leadership) && role.leadership.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2">
                              {content["titles.softLeadership"] || "Soft Skills & Leadership"}
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                              {role.leadership.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
