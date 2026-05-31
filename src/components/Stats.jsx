import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Briefcase, Award, BadgeCheck } from 'lucide-react';

const CountUpValue = ({ value, isInView }) => {
  const digits = value.replace(/\D/g, '');
  const suffix = value.replace(/\d/g, '');
  const target = parseInt(digits, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    setCount(0);
    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}{suffix}</>;
};

const Stats = () => {
  const { content } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "7+",
      label: content["stats.experience"] || "ปีประสบการณ์",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: "10+",
      label: content["stats.projects"] || "โปรเจกต์สำเร็จ",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "20+",
      label: content["stats.skills"] || "ทักษะที่เชี่ยวชาญ",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      value: "3",
      label: content["stats.certifications"] || "ใบรับรอง",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            {content["stats.title"] || "ความสำเร็จในตัวเลข"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {content["stats.subtitle"] || "ผลงานและความเชี่ยวชาญที่สะสมมาตลอดการทำงาน"}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card glass-card-hover rounded-[2.5rem] p-8 text-center h-full flex flex-col items-center justify-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-background dark:bg-slate-900 flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tabular-nums`}
                >
                  <CountUpValue value={stat.value} isInView={isInView} />
                </motion.div>

                <p className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
