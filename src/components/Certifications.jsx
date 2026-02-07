import { useLanguage } from '../context/LanguageContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { content } = useLanguage();
  const { certifications } = content;

  return (
    <section id="certifications" className="py-20 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        {content["titles.certifications"]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row gap-4 space-y-0 pb-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 shrink-0">
                 {cert.issuer.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg font-semibold leading-tight mb-1 truncate" title={cert.name}>
                  {cert.name}
                </CardTitle>
                <p className="text-sm font-medium text-slate-500">{cert.issuer}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-0">
              <div className="space-y-2 mb-4 flex-1">
                 {cert.date && <p className="text-sm text-slate-500">{cert.date}</p>}
                 {cert.credentialId && <p className="text-xs text-slate-400 font-mono">ID: {cert.credentialId}</p>}
                 {cert.skill && (
                    <Badge variant="outline" className="mt-2 text-xs font-normal border-blue-200 text-blue-700 bg-blue-50">
                      💎 {cert.skill}
                    </Badge>
                 )}
              </div>
              
              {cert.link && cert.link !== "#" && (
                <Button variant="outline" size="sm" asChild className="w-full mt-auto group">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Show credential 
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
