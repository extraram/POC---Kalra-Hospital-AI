import { Search, MapPin, Stethoscope, Clock, Globe, ShieldCheck, Award, GraduationCap } from "lucide-react";
import { useState } from "react";

export function FindYourDoctor() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Specialist</h2>
              <p className="text-blue-100 text-lg mb-10">
                Book an appointment with our expert doctors. Search by specialty, location, or directly by name.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Specialization</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3 top-3 text-slate-400" size={18} />
                      <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none text-sm">
                        <option>Any Specialty</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-slate-400" size={18} />
                      <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none text-sm">
                        <option>All Branches</option>
                        <option>Main Hospital, Sector 12</option>
                        <option>South Delhi Clinic</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Availability</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-slate-400" size={18} />
                      <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none text-sm">
                        <option>Any Time</option>
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Week</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Consultation Type</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 text-slate-400" size={18} />
                      <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none text-sm">
                        <option>In-Person & Online</option>
                        <option>In-Person Only</option>
                        <option>Online Video Consult</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md">
                    <Search size={18} /> Search Doctors
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative bg-blue-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Doctors team" 
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Transparency & Credibility Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Board Certified</h3>
              <p className="text-sm text-slate-600">100% of our senior consultants are certified by the National Medical Commission (NMC).</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Global Expertise</h3>
              <p className="text-sm text-slate-600">Our specialists bring years of experience from top medical institutions worldwide.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Proven Outcomes</h3>
              <p className="text-sm text-slate-600">We publish our clinical outcomes annually, maintaining a 98% success rate in complex surgeries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
