import { useState } from "react";
import { Bot, ArrowRight, Activity, AlertTriangle, UserPlus } from "lucide-react";
import { motion } from "motion/react";

export function SymptomChecker() {
  const [symptom, setSymptom] = useState("");
  const [step, setStep] = useState<"input" | "analyzing" | "result">("input");

  const handleCheck = () => {
    if (!symptom.trim()) return;
    setStep("analyzing");
    setTimeout(() => {
      setStep("result");
    }, 1500);
  };

  const isEmergency = symptom.toLowerCase().includes("chest") || symptom.toLowerCase().includes("breath") || symptom.toLowerCase().includes("stroke");

  return (
    <section className="section-y bg-gradient-to-br from-white via-[var(--ai-indigo-soft)] to-[var(--ai-teal-soft)]">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ai-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-medium text-sm mb-6 tracking-wider uppercase">
              <Bot size={16} /> AI-Powered Tool
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Not feeling well? Try our AI Symptom Checker</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Describe your symptoms and our advanced AI will suggest possible conditions, recommend the right specialist, and advise on the urgency of care.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Instant AI analysis based on medical guidelines",
                "Direction to the right medical department",
                "Emergency urgency level assessment",
                "Completely private and secure"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="ai-glass ai-glow rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--ai-teal)] via-[var(--ai-indigo)] to-purple-500"></div>
            
            {step === "input" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">AI Assistant</h3>
                    <p className="text-xs text-slate-500">Online</p>
                  </div>
                </div>
                
                <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm mb-6 text-sm text-slate-700">
                  Hello! I'm your AI health assistant. Please describe your symptoms in detail (e.g., "I have a severe headache and nausea for the past 2 days").
                </div>

                <textarea 
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="Describe your symptoms here..."
                  className="w-full h-32 bg-white border border-slate-200 rounded-2xl p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none text-sm mb-4"
                ></textarea>
                
                <button
                  onClick={handleCheck}
                  disabled={!symptom.trim()}
                  className="btn-primary-gradient w-full font-semibold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Analyze Symptoms <ArrowRight size={18} />
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">This tool does not provide medical diagnosis. In an emergency, call 1066.</p>
              </motion.div>
            )}

            {step === "analyzing" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 relative mb-6">
                  <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                  <Bot size={24} className="absolute inset-0 m-auto text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Analyzing your symptoms...</h3>
                <p className="text-slate-500 text-sm">Cross-referencing with our medical database.</p>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900 text-lg">Analysis Complete</h3>
                  <button onClick={() => setStep("input")} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">Start Over</button>
                </div>

                <div className="space-y-4">
                  {isEmergency ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-4">
                      <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={24} />
                      <div>
                        <h4 className="text-base font-bold text-red-700 mb-1">Urgency Level: CRITICAL EMERGENCY</h4>
                        <p className="text-sm text-red-600 mb-3">Your symptoms suggest a potentially life-threatening condition. Do not wait.</p>
                        <button className="text-xs font-bold bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors animate-pulse">
                          CALL 1066 IMMEDIATELY
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex gap-4">
                      <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="text-sm font-semibold text-orange-800 mb-1">Urgency Level: Moderate</h4>
                        <p className="text-xs text-orange-700">Based on your symptoms, we recommend consulting a doctor within 24-48 hours.</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-white border border-slate-100 rounded-xl p-4 flex gap-4 shadow-sm">
                    <Activity className="text-blue-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Recommended Department</h4>
                      <p className="text-xs text-slate-600 mb-3">General Medicine / Neurology</p>
                      <button className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                        View Department
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-xl p-4 flex gap-4 shadow-sm">
                    <UserPlus className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div className="w-full">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Suggested Next Step</h4>
                      <button className="w-full text-sm font-semibold bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
