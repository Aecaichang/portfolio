import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealTitle } from "./ui/Reveal";
import { User, Code, Heart, Zap } from 'lucide-react';

const AboutMe = () => {
  const { content } = useLanguage();

  const highlights = [
    {
      icon: <User className="w-5 h-5 text-blue-500" />,
      title: content["aboutMe.highlight1.title"],
      desc: content["aboutMe.highlight1.desc"]
    },
    {
      icon: <Code className="w-5 h-5 text-purple-500" />,
      title: content["aboutMe.highlight2.title"],
      desc: content["aboutMe.highlight2.desc"]
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: content["aboutMe.highlight3.title"],
      desc: content["aboutMe.highlight3.desc"]
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      title: content["aboutMe.highlight4.title"],
      desc: content["aboutMe.highlight4.desc"]
    }
  ];

  return (
    <section id="aboutMe" className="py-20 bg-secondary/30 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <RevealTitle>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            {content["titles.aboutMe"]}
          </h2>
        </RevealTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Column */}
          <Reveal width="100%" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span className="text-3xl">🚀</span> {content["aboutMe.storyTitle"]}
              </h3>
              
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-lg">
                <p className="indent-8">
                  {content["aboutMe.paragraph1"]}
                </p>
                <p>
                  {content["aboutMe.paragraph2"]}
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {content["aboutMe.paragraph3"]}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  #ActiveLearner
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  #TechEnthusiast
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
                  #ProblemSolver
                </Badge>
              </div>
            </div>
          </Reveal>

          {/* Highlights Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Reveal key={index} width="100%" delay={0.3 + (index * 0.1)}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-t border-white/20 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-start gap-4 h-full">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
