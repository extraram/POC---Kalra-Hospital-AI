import { BedDouble, Award, Users, HeartPulse } from "lucide-react";
import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { icon: <BedDouble size={32} />, value: "300+", label: "Beds Capacity" },
    { icon: <Award size={32} />, value: "35+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "100+", label: "Expert Doctors" },
    { icon: <HeartPulse size={32} />, value: "24×7", label: "Emergency Care" },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-6 mb-20">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-[var(--primary)] mb-4 bg-[var(--ai-indigo-soft)] p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-stat mb-1">{stat.value}</h3>
              <p className="text-small font-medium text-[#6B7280]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
