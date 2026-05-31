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

import { Reveal, RevealTitle } from "./ui/Reveal";

const Certifications = () => {
  const { content } = useLanguage();
  const { certifications } = content;

  return (
    <section id="certifications" className="py-20 container mx-auto px-4 transition-colors duration-500">
      <Card className="glass-card rounded-[2.5rem] p-8 md:p-12">
        <CardContent className="p-0">
      <RevealTitle>
        <h2 id="certifications-title" className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
          {content["titles.certifications"]}
        </h2>
      </RevealTitle>
      <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <Reveal key={index} width="100%" delay={index * 0.1}>
            <Card id={`cert-card-${index}`} className="flex flex-col h-full hover:shadow-lg transition-[box-shadow,background-color,border-color] duration-300 dark:bg-slate-900/80 dark:border-slate-800">
              <CardHeader id={`cert-header-${index}`} className="flex flex-row gap-4 space-y-0 pb-4">
                <div id={`cert-issuer-icon-${index}`} className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl font-bold text-slate-600 dark:text-slate-300 shrink-0">
                   {cert.issuer.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle id={`cert-name-${index}`} className="text-lg font-semibold leading-tight mb-1 truncate text-balance dark:text-slate-100" title={cert.name}>
                    {cert.name}
                  </CardTitle>
                  <p id={`cert-issuer-name-${index}`} className="text-sm font-medium text-slate-600 dark:text-slate-300 text-balance">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent id={`cert-content-${index}`} className="flex-1 flex flex-col pt-0">
                <div className="space-y-2 mb-4 flex-1">
                   {cert.date && <p id={`cert-date-${index}`} className="text-sm text-slate-600 dark:text-slate-300 tabular-nums">{cert.date}</p>}
                   {cert.credentialId && <p id={`cert-cred-id-${index}`} className="text-xs text-slate-600 dark:text-slate-300 font-mono tabular-nums">ID: {cert.credentialId}</p>}
                   {cert.skill && (
                      <Badge id={`cert-skill-${index}`} variant="outline" className="mt-2 text-xs font-normal border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30">
                        💎 {cert.skill}
                      </Badge>
                   )}
                </div>
                
                {cert.link && cert.link !== "#" && (
                  <Button id={`btn-cert-show-${index}`} variant="outline" size="sm" asChild className="w-full mt-auto group dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-300">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                       {content["titles.viewProject"] || "View Credential"}
                      <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Certifications;
