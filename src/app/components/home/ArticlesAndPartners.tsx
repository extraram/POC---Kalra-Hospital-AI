import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const articles = [
  { title: "Understanding Heart Health in Your 40s", category: "Cardiology", readTime: "5 min read", img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600" },
  { title: "The Ultimate Guide to Managing Diabetes", category: "Endocrinology", readTime: "8 min read", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600" },
  { title: "Mental Health: Recognizing Early Signs of Anxiety", category: "Psychiatry", readTime: "4 min read", img: "https://images.unsplash.com/photo-1527613426400-9ce99653c8e4?auto=format&fit=crop&q=80&w=600" },
];

export function ArticlesAndPartners() {
  return (
    <>
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                AI-Personalized For You
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recommended Health Insights</h3>
              <p className="text-slate-600">Based on your recent interest in Cardiology and Internal Medicine, here are some helpful resources curated by our AI.</p>
            </div>
            <Link to="/blogs" className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View all articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-4 relative h-56">
                  <ImageWithFallback 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                    {article.category}
                  </div>
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center text-slate-500 text-sm">
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>By Dr. Medical Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blogs" className="inline-flex items-center text-blue-600 font-semibold">
              View all articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conversational FAQ Section */}
      <section className="section-y bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions, Answered Simply</h2>
            <p className="text-slate-600">We've organized our most common patient inquiries to help you find exactly what you need.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do I find a heart specialist in West Delhi?", a: "You can use our 'Find Your Doctor' tool to search by specialty (Cardiology) and location. Alternatively, chat with our Virtual Assistant for an immediate recommendation based on your symptoms." },
              { q: "Do I need to visit the hospital for a minor fever?", a: "Not necessarily. We recommend using our AI Symptom Checker first. If it's a routine fever, you can book a tele-consultation with one of our General Physicians directly from the homepage." },
              { q: "What should I do if I suspect someone is having a stroke?", a: "Call 1066 immediately. Time is critical. Do not use the symptom checker or book a standard appointment. Our emergency response team will guide you on immediate next steps." },
              { q: "Can I use my corporate health insurance here?", a: "Yes, Kalra Hospitals partners with all major corporate TPAs and health insurance providers for cashless treatments. You can verify your specific provider in our Insurance section." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-slate-100 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Insurance Partners</h3>
            <p className="text-slate-600">We offer cashless treatment facility with all major health insurance providers.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70 hover:opacity-100 transition-opacity">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white h-20 rounded-xl border border-slate-200 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm hover:shadow-md">
                <span className="font-bold text-slate-400 text-lg">Partner {i+1}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/insurance" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              <CheckCircle2 size={18} className="text-green-500" /> Verify Your Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
