import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Reveal, RevealTitle } from "./ui/Reveal";

const Education = () => {
  const { content } = useLanguage();
  const { education } = content;

  return (
    <section id="education" className="py-20 bg-secondary/30 transition-colors duration-500">
      <div id="education-container" className="container mx-auto px-4 max-w-4xl">
        <RevealTitle>
          <h2 id="education-title" className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            {content["titles.education"]}
          </h2>
        </RevealTitle>
        
        <div id="education-list" className="space-y-6">
          {education.map((item, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <Card id={`education-card-${index}`} className="hover:shadow-md transition-[box-shadow,background-color,border-color] duration-300 dark:bg-slate-900/80 dark:border-slate-800">
                <CardHeader id={`education-header-${index}`} className="flex flex-row items-baseline justify-between gap-4 pb-2">
                  <div className="space-y-1">
                    <CardTitle id={`education-degree-${index}`} className="text-xl text-balance dark:text-slate-100">{item.degree}</CardTitle>
                    <CardDescription id={`education-uni-${index}`} className="text-base font-medium text-slate-700 dark:text-slate-300 text-balance">
                      {item.university}
                    </CardDescription>
                  </div>
                  <Badge id={`education-year-${index}`} variant="outline" className="text-base whitespace-nowrap bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 tabular-nums">
                    {item.year}
                  </Badge>
                </CardHeader>
                <CardContent id={`education-content-${index}`}>
                  <div className="text-slate-600 dark:text-slate-300">
                    <p id={`education-honors-${index}`} className="font-medium text-blue-600 dark:text-blue-400 mb-1 text-balance">{item.honors}</p>
                    <p id={`education-desc-${index}`} className="text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
