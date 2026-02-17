import { useLanguage } from '../context/LanguageContext';
import { Reveal, RevealTitle } from "./ui/Reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiDaisyui,
  SiReactrouter,
  SiReactquery,
  SiSupabase,
  SiPostgresql,
  SiGoogle,
  SiLine,
  SiGoogledrive,
  SiFirebase,
  SiDeno,
  SiGoogleanalytics,
  SiVercel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAntdesign
} from "react-icons/si";
import { Sheet } from "lucide-react"; // Using Sheet icon for Excel like representation
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"

const getTechIcon = (techName) => {
  const name = techName.toLowerCase();
  
  if (name.includes("react")) {
    if (name.includes("router")) return <SiReactrouter className="mr-1" />;
    if (name.includes("query")) return <SiReactquery className="mr-1" />;
    return <SiReact className="mr-1" />;
  }
  if (name.includes("vite")) return <SiVite className="mr-1" />;
  if (name.includes("tailwind")) return <SiTailwindcss className="mr-1" />;
  if (name.includes("daisyui")) return <SiDaisyui className="mr-1" />;
  if (name.includes("supabase")) return <SiSupabase className="mr-1" />;
  if (name.includes("postgresql")) return <SiPostgresql className="mr-1" />;
  if (name.includes("gemini") || name.includes("google")) {
    if (name.includes("drive")) return <SiGoogledrive className="mr-1" />;
    if (name.includes("analytics")) return <SiGoogleanalytics className="mr-1" />;
    return <SiGoogle className="mr-1" />;
  }
  if (name.includes("line")) return <SiLine className="mr-1" />;
  if (name.includes("firebase")) return <SiFirebase className="mr-1" />;
  if (name.includes("deno")) return <SiDeno className="mr-1" />;
  if (name.includes("excel")) return <Sheet className="mr-1 w-3 h-3" />;
  if (name.includes("vercel")) return <SiVercel className="mr-1" />;
  if (name.includes("node")) return <SiNodedotjs className="mr-1" />;
  if (name.includes("express")) return <SiExpress className="mr-1" />;
  if (name.includes("mongo")) return <SiMongodb className="mr-1" />;
  if (name.includes("ant")) return <SiAntdesign className="mr-1" />;

  return null;
};

const Portfolio = () => {
  const { content } = useLanguage();
  const { portfolio } = content;

  return (
    <section id="portfolio" className="py-20 container mx-auto px-4 transition-colors duration-500">
      <RevealTitle>
        <h2 id="portfolio-title" className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
          {content["titles.featuredWorks"]}
        </h2>
      </RevealTitle>
      
      <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <Reveal key={item.id} width="100%" delay={index * 0.1}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  id={`btn-portfolio-open-${item.id}`}
                  type="button"
                  variant="ghost"
                  className="h-auto w-full p-0 text-left"
                >
                  <Card id={`portfolio-card-${item.id}`} className="overflow-hidden h-full w-full hover:shadow-2xl hover:shadow-blue-500/10 transition-[transform,box-shadow,background-color,border-color] duration-500 hover:-translate-y-2 cursor-pointer group border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 backdrop-blur-sm">
                    <div id={`portfolio-img-wrapper-${item.id}`} className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img 
                        id={`portfolio-img-${item.id}`}
                        src={item.images && item.images.length > 0 ? item.images[0] : item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div id={`portfolio-overlay-${item.id}`} className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge id={`btn-portfolio-view-${item.id}`} variant="secondary" className="rounded-full text-sm px-3 py-1.5">
                          {content["titles.viewProject"]}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader id={`portfolio-header-${item.id}`}>
                      <div className="mb-2">
                        <Badge id={`portfolio-badge-${item.id}`} variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30">
                          {item.category}
                        </Badge>
                      </div>
                      <CardTitle id={`portfolio-title-text-${item.id}`} className="text-xl dark:text-slate-100">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent id={`portfolio-content-${item.id}`}>
                      <p id={`portfolio-desc-${item.id}`} className="text-slate-600 dark:text-slate-300 line-clamp-3">{item.description}</p>
                    </CardContent>
                  </Card>
                </Button>
              </DialogTrigger>
              
              <DialogContent id={`portfolio-dialog-${item.id}`} className="max-w-4xl p-0 overflow-hidden bg-white dark:bg-slate-900 max-h-[90vh] flex flex-col border-none dark:shadow-2xl">
                <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Image Section - Top */}
                <div id={`portfolio-dialog-img-sec-${item.id}`} className="w-full bg-slate-950 flex items-center justify-center p-8 min-h-[300px] relative shrink-0">
                  {item.images && item.images.length > 0 ? (
                    <Carousel id={`portfolio-carousel-${item.id}`} className="w-full max-w-2xl">
                      <CarouselContent>
                        {item.images.map((img, idx) => (
                          <CarouselItem key={idx} className="flex items-center justify-center">
                             <img 
                               id={`portfolio-dialog-img-${item.id}-${idx}`}
                               src={img} 
                               alt={`${item.title} - ${idx + 1}`} 
                               className="max-w-full max-h-[400px] object-contain shadow-2xl rounded-lg"
                             />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40 border-none text-white absolute top-1/2 -translate-y-1/2" />
                      <CarouselNext className="right-2 bg-white/20 hover:bg-white/40 border-none text-white absolute top-1/2 -translate-y-1/2" />
                    </Carousel>
                  ) : (
                    <img 
                      id={`portfolio-dialog-img-single-${item.id}`}
                      src={item.image} 
                      alt={item.title} 
                      className="max-w-full max-h-[400px] object-contain shadow-2xl rounded-lg"
                    />
                  )}
                </div>
                                {/* Content Section - Bottom */}
                <div id={`portfolio-dialog-content-sec-${item.id}`} className="w-full bg-white dark:bg-slate-900 flex-1 min-h-0">
                  <ScrollArea className="h-full">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <Badge variant="secondary" className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 mb-3">
                            {item.category}
                          </Badge>
                          <DialogTitle id={`portfolio-dialog-title-${item.id}`} className="text-3xl font-bold text-slate-900 dark:text-slate-100 text-balance">{item.title}</DialogTitle>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.link && item.link !== "#" && (
                            <Button id={`btn-portfolio-visit-${item.id}`} asChild className="rounded-full bg-blue-600 hover:bg-blue-700 shrink-0">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {content["titles.visitWebsite"]}
                              </a>
                            </Button>
                          )}
                          {item.sourceCode && item.sourceCode !== "#" && (
                            <Button id={`btn-portfolio-source-${item.id}`} asChild variant="outline" className="rounded-full shrink-0">
                              <a href={item.sourceCode} target="_blank" rel="noopener noreferrer">
                                {content["titles.sourceCode"] || "Source Code"}
                              </a>
                            </Button>
                          )}
                          {item.article && item.article !== "#" && (
                            <Button id={`btn-portfolio-article-${item.id}`} asChild variant="outline" className="rounded-full shrink-0">
                              <a href={item.article} target="_blank" rel="noopener noreferrer">
                                {content["titles.readArticle"] || "Read Article"}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <DialogDescription id={`portfolio-dialog-desc-${item.id}`} className="text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-8 whitespace-pre-line">
                        {item.description}
                      </DialogDescription>

                      {item.caseStudy && (
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {Array.isArray(item.caseStudy.problem) && item.caseStudy.problem.length > 0 && (
                            <Card className="border-red-100 dark:border-red-900/40">
                              <CardContent className="pt-6">
                                <h4 className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide mb-3">
                                  {content["titles.problem"] || "Problem"}
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                  {item.caseStudy.problem.map((problem, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                      <span>{problem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {Array.isArray(item.caseStudy.solution) && item.caseStudy.solution.length > 0 && (
                            <Card className="border-blue-100 dark:border-blue-900/40">
                              <CardContent className="pt-6">
                                <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-3">
                                  {content["titles.solution"] || "Solution"}
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                  {item.caseStudy.solution.map((solution, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                      <span>{solution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {Array.isArray(item.caseStudy.impact) && item.caseStudy.impact.length > 0 && (
                            <Card className="border-emerald-100 dark:border-emerald-900/40">
                              <CardContent className="pt-6">
                                <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide mb-3">
                                  {content["titles.businessImpact"] || "Business Impact"}
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                  {item.caseStudy.impact.map((impact, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                      <span>{impact}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {Array.isArray(item.caseStudy.architecture) && item.caseStudy.architecture.length > 0 && (
                            <Card className="border-violet-100 dark:border-violet-900/40">
                              <CardContent className="pt-6">
                                <h4 className="text-sm font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wide mb-3">
                                  {content["titles.architecture"] || "System Architecture"}
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                  {item.caseStudy.architecture.map((flow, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                                      <span>{flow}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      )}

                      {item.techStack && (
                        <div id={`portfolio-tech-stack-${item.id}`} className="mb-8">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.techStack.map((tech, i) => (
                              <Badge key={i} id={`portfolio-tech-${item.id}-${i}`} variant="outline" className="flex items-center gap-1.5 px-3 py-1 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                                {getTechIcon(tech)}
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.features && (
                        <div id={`portfolio-features-${item.id}`} className="grid md:grid-cols-2 gap-8">
                          {item.features.map((section, idx) => (
                            <Card key={idx} id={`portfolio-feature-card-${item.id}-${idx}`} className="border-slate-100 dark:border-slate-800 shadow-sm dark:bg-slate-900/50">
                              <CardContent className="pt-6">
                                <h4 id={`portfolio-feature-title-${item.id}-${idx}`} className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-4 flex items-center gap-2">
                                  <span className="w-1 h-4 bg-pink-500 rounded-full"></span>
                                  {section.title}
                                </h4>
                                <ul id={`portfolio-feature-list-${item.id}-${idx}`} className="space-y-2">
                                  {section.items.map((feature, fIdx) => (
                                    <li key={fIdx} id={`portfolio-feature-item-${item.id}-${idx}-${fIdx}`} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
