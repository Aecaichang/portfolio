import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Reveal, RevealTitle } from "./ui/Reveal";

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section id="skills" className="py-20 container mx-auto px-4 transition-colors duration-500">
      <RevealTitle>
        <h2 id="skills-title" className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
          {content["titles.skills"]}
        </h2>
      </RevealTitle>
      <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <Reveal key={index} width="100%" delay={index * 0.05}>
            <Card
              id={`skills-card-${index}`}
              className={`h-full hover:shadow-lg transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-1 dark:bg-slate-900/80 dark:border-slate-800 ${
                category.targetRole ? "ring-1 ring-blue-200 dark:ring-blue-900/50" : ""
              }`}
            >
              <CardHeader id={`skills-header-${index}`} className="pb-3">
                {category.targetRole && (
                  <Badge variant="outline" className="w-fit mx-auto mb-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30">
                    {category.targetRole}
                  </Badge>
                )}
                <CardTitle id={`skills-category-${index}`} className="text-xl text-center text-slate-800 dark:text-slate-100 border-b pb-2 border-slate-100 dark:border-slate-800">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent id={`skills-content-${index}`}>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((item, i) => (
                    <Badge id={`skill-badge-${index}-${i}`} key={i} variant="secondary" className="text-sm py-1 px-3 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default dark:bg-slate-800 dark:text-slate-300">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
