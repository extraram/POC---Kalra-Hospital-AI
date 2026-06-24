import { Link } from "react-router";
import { Phone, MapPin, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/image-5.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#1F2937] pt-16 pb-8 border-t border-[#E5E7EB]">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-[#E5E7EB] pb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6" aria-label="Kalra Hospitals home">
              <ImageWithFallback
                src={logoImg}
                alt="Kalra Hospitals"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[#6B7280] text-sm mb-6 leading-relaxed">
              Delhi's Trusted Destination for Advanced Healthcare. We combine medical excellence, advanced technology, and compassionate care to heal you better.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-white hover:border-transparent transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gradient-primary-btn)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-[#1F2937]">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Find a Doctor', 'Book Appointment', 'Health Packages', 'Patient Stories', 'Careers'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-[#6B7280] hover:text-[var(--primary)] text-sm flex items-center group transition-colors">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[var(--brand-accent)]" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-[#1F2937]">Centers of Excellence</h3>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Gastroenterology', 'Urology', 'Emergency Care'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-[#6B7280] hover:text-[var(--primary)] text-sm flex items-center group transition-colors">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[var(--brand-accent)]" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-[#1F2937]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#6B7280] text-sm">
                <MapPin size={18} className="text-[var(--primary)] shrink-0 mt-0.5" />
                <span>Sector 12, Main Road, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280] text-sm">
                <Phone size={18} className="text-[var(--primary)] shrink-0" />
                <span>+91 11 2345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280] text-sm">
                <Mail size={18} className="text-[var(--primary)] shrink-0" />
                <span>info@kalrahospitals.com</span>
              </li>
              <li className="pt-2">
                <div
                  className="rounded-xl p-4 flex items-center gap-3 text-white"
                  style={{ background: "var(--gradient-primary-btn)" }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/85">24/7 Emergency</p>
                    <p className="text-xl font-bold leading-none">1066</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B7280]">
          <p>&copy; {currentYear} Kalra Hospitals. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-[var(--primary)] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
