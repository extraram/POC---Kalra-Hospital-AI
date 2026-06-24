import { ArrowRight, HeartPulse, Brain, Bone, Activity, Droplets, Stethoscope, Microscope, Scissors, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

const specialties = [
  { id: "cardiology", name: "Cardiology", desc: "Advanced heart care, angioplasty, and cardiac surgeries.", icon: HeartPulse, img: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=600" },
  { id: "neurology", name: "Neurology", desc: "Expert care for brain, spine, and nerve disorders.", icon: Brain, img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600" },
  { id: "orthopedics", name: "Orthopedics", desc: "Joint replacements, sports injuries, and spine surgery.", icon: Bone, img: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=600" },
  { id: "nephrology", name: "Nephrology", desc: "Comprehensive kidney care and dialysis services.", icon: Droplets, img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
  { id: "urology", name: "Urology", desc: "Minimally invasive treatments for urinary tract conditions.", icon: Activity, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
  { id: "gastroenterology", name: "Gastroenterology", desc: "Digestive health and advanced endoscopy procedures.", icon: Stethoscope, img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600" },
];

export function Specialties() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r from-[var(--primary)] to-[var(--brand-accent)] bg-clip-text text-transparent">Centers of Excellence</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">World-Class Medical Specialties</h3>
          <p className="text-slate-600 text-lg">
            Our multi-disciplinary teams work together to provide holistic, patient-centric care using the latest technology and medical advancements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div 
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback 
                    src={spec.img} 
                    alt={spec.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="ai-glass absolute top-4 left-4 p-3 rounded-xl text-[var(--primary)] shadow-sm">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{spec.name}</h4>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{spec.desc}</p>
                  <Link to={`/departments/${spec.id}`} className="inline-flex items-center text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--ai-indigo)]">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/departments" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl hover:bg-[var(--ai-indigo-soft)] transition-colors">
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
