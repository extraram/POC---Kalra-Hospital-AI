import { Star, Play } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const stories = [
  { name: "Rajesh Kumar", treatment: "Cardiac Bypass", quote: "The doctors at Kalra saved my life. Their expertise and the nursing staff's care were exceptional.", rating: 5, img: "https://i.pravatar.cc/150?img=11" },
  { name: "Priya Sharma", treatment: "Joint Replacement", quote: "I can walk without pain after years. The physical therapy team post-surgery was fantastic.", rating: 5, img: "https://i.pravatar.cc/150?img=5" },
];

export function PackagesAndStories() {
  return (
    <>
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Patient Success Stories</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Real Patients, Real Healing</h3>
              <p className="text-slate-600 text-lg mb-8">
                Don't just take our word for it. Hear from the thousands of patients who have experienced our world-class medical care and compassionate approach.
              </p>
              
              <div className="space-y-6">
                {stories.map((story, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(story.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-700 italic mb-4">"{story.quote}"</p>
                    <div className="flex items-center gap-3">
                      <ImageWithFallback src={story.img} alt={story.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">{story.name}</h5>
                        <p className="text-xs text-slate-500">Treatment: {story.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/stories" className="inline-block mt-8 text-blue-600 font-semibold hover:text-blue-700">Read more stories &rarr;</Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-900 group cursor-pointer shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                alt="Hospital tour video" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white pl-1 shadow-lg">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-bold text-lg drop-shadow-md">A Journey of Healing</h4>
                <p className="text-sm text-slate-200 drop-shadow-md">Kalra Hospitals Patient Documentary</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
