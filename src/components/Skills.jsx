import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section id="skills" className="py-20 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        {content["titles.skills"]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-center text-slate-800 border-b pb-2 border-slate-100">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.items.map((item, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1 px-3 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
