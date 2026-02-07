import { useLanguage } from '../context/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <section id="portfolio" className="py-20 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        {content["titles.featuredWorks"]}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-slate-200">
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img 
                    src={item.images && item.images.length > 0 ? item.images[0] : item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="rounded-full">
                      {content["titles.viewProject"]}
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 line-clamp-3">{item.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white max-h-[90vh] flex flex-col border-none">
              <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Image Section - Top */}
                <div className="w-full bg-slate-900 flex items-center justify-center p-8 min-h-[300px] relative shrink-0">
                  {item.images && item.images.length > 0 ? (
                    <Carousel className="w-full max-w-2xl">
                      <CarouselContent>
                        {item.images.map((img, idx) => (
                          <CarouselItem key={idx} className="flex items-center justify-center">
                             <img 
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
                      src={item.image} 
                      alt={item.title} 
                      className="max-w-full max-h-[400px] object-contain shadow-2xl rounded-lg"
                    />
                  )}
                </div>
                
                {/* Content Section - Bottom */}
                <div className="w-full p-8 bg-white">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <Badge variant="secondary" className="text-sm font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 mb-3">
                        {item.category}
                      </Badge>
                      <DialogTitle className="text-3xl font-bold text-slate-900">{item.title}</DialogTitle>
                    </div>
                    {item.link && item.link !== "#" && (
                      <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 shrink-0">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <DialogDescription className="text-base leading-relaxed text-slate-600 mb-8">
                    {item.description}
                  </DialogDescription>

                  {item.techStack && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech, i) => (
                          <Badge key={i} variant="outline" className="flex items-center gap-1.5 px-3 py-1 text-slate-700 border-slate-200 bg-slate-50">
                            {getTechIcon(tech)}
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.features && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {item.features.map((section, idx) => (
                        <Card key={idx} className="border-slate-100 shadow-sm">
                          <CardContent className="pt-6">
                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                              <span className="w-1 h-4 bg-pink-500 rounded-full"></span>
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((feature, fIdx) => (
                                <li key={fIdx} className="text-slate-600 text-sm flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
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
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
