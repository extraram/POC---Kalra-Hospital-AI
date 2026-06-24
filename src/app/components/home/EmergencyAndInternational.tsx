import { Ambulance, PhoneCall, MapPin, Globe, Plane, ShieldCheck, HeartHandshake } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function EmergencyAndInternational() {
  return (
    <>
      <section className="section-y bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500 text-white font-bold text-sm mb-6 border border-red-400">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> 24/7 Emergency Care
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Medical Emergency? We are ready to help.</h2>
              <p className="text-red-100 text-lg mb-8 max-w-xl">
                Advanced life support ambulances, state-of-the-art trauma centers, and expert emergency physicians available round the clock.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="tel:1066" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center shadow-xl">
                  <PhoneCall size={24} className="mr-3" /> Call 1066 Now
                </a>
                <button className="bg-red-700 border border-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-colors flex items-center">
                  <Ambulance size={20} className="mr-3" /> Request Ambulance
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><MapPin /> Nearest Emergency Center</h3>
              <div className="space-y-4">
                <div className="bg-white text-slate-900 p-4 rounded-xl">
                  <h4 className="font-bold">Main Hospital, Sector 12</h4>
                  <p className="text-sm text-slate-600 mb-2">Distance: ~2.5 km away</p>
                  <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Get Directions &rarr;</a>
                </div>
                <div className="bg-red-800/50 p-4 rounded-xl">
                  <h4 className="font-bold">South Delhi Trauma Center</h4>
                  <p className="text-sm text-red-200 mb-2">Distance: ~8.0 km away</p>
                  <a href="#" className="text-sm font-bold text-white flex items-center">Get Directions &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=400" 
                  alt="International patient" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400" 
                  alt="Medical tourism" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Globe size={32} />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Global Healthcare</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Welcoming International Patients</h3>
              <p className="text-slate-600 text-lg mb-8">
                Kalra Hospitals is a preferred destination for international patients seeking world-class healthcare at competitive prices. We offer end-to-end medical tourism services.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Plane, title: "Travel Assistance", desc: "Visa letters & airport pickup" },
                  { icon: HeartHandshake, title: "Dedicated Coordinator", desc: "Single point of contact" },
                  { icon: ShieldCheck, title: "Treatment Planning", desc: "Pre-arrival consultation" },
                  { icon: Globe, title: "Language Translators", desc: "Over 15 languages supported" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/international" className="inline-block bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors">
                Explore International Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
