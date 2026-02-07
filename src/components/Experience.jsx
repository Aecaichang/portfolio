import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = () => {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          {content["titles.experience"]}
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    {job.company}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {job.type}
                  </Badge>
                </div>
                {job.location && (
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {job.location}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 ml-2 space-y-8 py-2">
                  {job.roles.map((role, rIndex) => (
                    <div className="relative" key={rIndex}>
                      {/* Timeline dot */}
                      <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                        <h4 className="text-lg font-semibold text-slate-800">{role.title}</h4>
                        <span className="text-sm text-slate-500 font-medium">{role.period}</span>
                      </div>
                      
                      {role.description && (
                        <div className="text-slate-600 text-sm leading-relaxed">
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
