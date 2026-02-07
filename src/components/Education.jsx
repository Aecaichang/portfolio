import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Education = () => {
  const { content } = useLanguage();
  const { education } = content;

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          {content["titles.education"]}
        </h2>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-baseline justify-between gap-4 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <CardDescription className="text-base font-medium text-slate-700">
                    {item.university}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-base whitespace-nowrap bg-blue-50 text-blue-700 border-blue-200">
                  {item.year}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-slate-600">
                  <p className="font-medium text-blue-600 mb-1">{item.honors}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
