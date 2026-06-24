import { Link } from "react-router";
import { Calendar, Search, PhoneCall, Bot, ShieldCheck, Award, Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const trustBadges = [
  { icon: ShieldCheck, label: "NABH Accredited" },
  { icon: Award, label: "JCI Certified" },
  { icon: Stethoscope, label: "500+ Specialists" },
  { icon: HeartPulse, label: "24×7 Emergency" },
];

const heroStats = [
  { value: "40+", label: "Years of Care" },
  { value: "2M+", label: "Lives Touched" },
  { value: "98%", label: "Success Rate" },
];

export function Hero() {
  return (
    <section
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-44 overflow-hidden text-white isolate"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Layered background — image, radial glows, mesh dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.12] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_90%_10%,rgba(200,30,74,0.45),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,rgba(155,18,56,0.35),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Soft bottom wave to break into the next section */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 z-10 text-[#F8F9FC]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,60 C320,120 720,0 1080,40 C1260,60 1380,80 1440,60 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-20 container-x flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl"
        >
          <h1 className="text-white mb-6 leading-[1.05]">
            <span className="block">Advanced Healthcare,</span>
            <span
              className="text-script block bg-gradient-to-r from-[#FFE3EB] via-white to-[#FFB3C5] bg-clip-text text-transparent py-1 sm:py-2"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.15,
                letterSpacing: "0.01em",
              }}
            >
              with a touch of
            </span>
            <span className="block bg-gradient-to-r from-white via-[#FFE3EB] to-[#FFB3C5] bg-clip-text text-transparent">
              Compassion.
            </span>
          </h1>

          <p className="text-white/85 mb-10 mx-auto max-w-2xl">
            World-class specialists, AI-assisted diagnostics, and 24×7 emergency care —
            built around you. Book in under 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10">
            <Link
              to="/book"
              className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl group"
            >
              <Calendar size={20} />
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:1066"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-secondary)] px-7 py-4 rounded-2xl font-semibold hover:bg-white/95 brand-shadow transition-all"
            >
              <PhoneCall size={20} />
              Emergency · 1066
            </a>

            <button className="ai-glow inline-flex items-center justify-center gap-2 text-white px-6 py-4 rounded-2xl font-semibold bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition-all">
              <Bot size={20} />
              Ask Kalra AI
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-white/80 mb-12">
            <Link to="/doctors" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Search size={16} /> Find a Doctor
            </Link>
            <span className="w-px h-4 bg-white/25" />
            <Link to="/locations" className="hover:text-white transition-colors">Branch Locations</Link>
            <span className="w-px h-4 bg-white/25" />
            <Link to="/packages" className="hover:text-white transition-colors">Health Packages</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 bg-white/8 border border-white/15 rounded-xl px-3 py-2.5 backdrop-blur"
              >
                <Icon size={18} className="text-[#FFD6E1] shrink-0" />
                <span className="text-small text-white/90 font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Hero stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-20 container-x mt-12 md:mt-16"
      >
        <div className="ai-glass rounded-2xl md:rounded-3xl px-4 sm:px-6 py-5 md:py-6 grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-[#E5E7EB]">
          {heroStats.map((s) => (
            <div key={s.label} className="text-center px-1 sm:px-2 min-w-0">
              <p
                className="text-stat text-3xl sm:text-4xl md:text-5xl"
                style={{
                  background: "var(--gradient-primary-btn)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs md:text-small text-[#6B7280] mt-1 uppercase tracking-wider truncate">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
