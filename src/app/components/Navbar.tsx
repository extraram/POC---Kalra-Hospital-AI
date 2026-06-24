import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, MapPin, Clock, Search, Menu, X, Calendar, ChevronDown, HeartPulse, Brain, Bone, Stethoscope, Droplets, Activity, Microscope, Scissors, Baby, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/image-2.png";

type SubItem = { name: string; path: string; icon?: typeof HeartPulse; desc?: string };
type NavLink = { name: string; path: string; submenu?: SubItem[] };

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Doctors",
    path: "/doctors",
    submenu: [
      { name: "Find a Doctor", path: "/doctors", icon: Search, desc: "Search by name, specialty or location" },
      { name: "Senior Consultants", path: "/doctors?seniority=senior", icon: Stethoscope, desc: "Our most experienced specialists" },
      { name: "Book Video Consult", path: "/doctors?mode=video", icon: Activity, desc: "Talk to a doctor online today" },
    ],
  },
  {
    name: "Departments",
    path: "/departments",
    submenu: [
      { name: "Cardiology", path: "/departments/cardiology", icon: HeartPulse, desc: "Heart & vascular care" },
      { name: "Neurology", path: "/departments/neurology", icon: Brain, desc: "Brain, spine & nerves" },
      { name: "Orthopedics", path: "/departments/orthopedics", icon: Bone, desc: "Joint, bone & sports injury" },
      { name: "Gastroenterology", path: "/departments/gastroenterology", icon: Stethoscope, desc: "Digestive health" },
      { name: "Nephrology", path: "/departments/nephrology", icon: Droplets, desc: "Kidney & dialysis" },
      { name: "Urology", path: "/departments/urology", icon: Activity, desc: "Urinary tract care" },
      { name: "Pediatrics", path: "/departments/pediatrics", icon: Baby, desc: "Newborn & child care" },
      { name: "Ophthalmology", path: "/departments/ophthalmology", icon: Eye, desc: "Eye & vision care" },
    ],
  },
  {
    name: "Treatments",
    path: "/treatments",
    submenu: [
      { name: "Angioplasty", path: "/treatments/angioplasty", icon: HeartPulse },
      { name: "Joint Replacement", path: "/treatments/joint-replacement", icon: Bone },
      { name: "Cancer Care", path: "/treatments/oncology", icon: Microscope },
      { name: "Minimally Invasive Surgery", path: "/treatments/mis", icon: Scissors },
    ],
  },
  { name: "Packages", path: "/packages" },
  { name: "International", path: "/international" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const headerClasses = isScrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-white/85 backdrop-blur-md";

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerClasses}`}>
      {/* Top contact strip — desktop only, hides on scroll */}
      <div
        className={`hidden lg:block border-b border-[#E5E7EB] overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-x flex justify-between items-center py-2 text-xs text-[#6B7280]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={13} className="text-[var(--brand-accent)]" /> Emergency: 1066</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[var(--primary)]" /> New Delhi, India</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-[var(--primary)]" /> 24/7 Available</span>
          </div>
          <div className="flex items-center gap-5 font-medium">
            <Link to="/insurance" className="hover:text-[var(--primary)] transition-colors">Insurance</Link>
            <Link to="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Kalra Hospitals home">
          <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 ${isScrolled ? "h-10 sm:h-12" : "h-12 sm:h-14 lg:h-16"}`}>
            <ImageWithFallback src={logoImg} alt="Kalra Hospitals" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const active =
              location.pathname === link.path ||
              (link.submenu && link.submenu.some((s) => location.pathname.startsWith(s.path)));
            const hasSub = !!link.submenu?.length;
            const isOpen = openSubmenu === link.name;
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasSub && setOpenSubmenu(link.name)}
                onMouseLeave={() => hasSub && setOpenSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={`inline-flex items-center gap-1 px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-[var(--ai-indigo-soft)] text-[var(--primary)]"
                      : "text-[#1F2937] hover:bg-[#F1ECF8] hover:text-[var(--primary)]"
                  }`}
                  aria-haspopup={hasSub || undefined}
                  aria-expanded={hasSub ? isOpen : undefined}
                >
                  {link.name}
                  {hasSub && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {hasSub && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 ${
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden ${
                        link.submenu!.length > 4 ? "w-[560px]" : "w-[320px]"
                      }`}
                      style={{ boxShadow: "0 20px 50px -10px rgba(75,44,115,0.18)" }}
                    >
                      <div className="h-1 w-full" style={{ background: "var(--gradient-primary-btn)" }} />
                      <div
                        className={`p-3 grid gap-1 ${
                          link.submenu!.length > 4 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {link.submenu!.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.name}
                              to={s.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F1ECF8] transition-colors group"
                            >
                              {Icon && (
                                <span className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-[var(--primary)] bg-[var(--ai-indigo-soft)] group-hover:bg-white">
                                  <Icon size={18} />
                                </span>
                              )}
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-[#1F2937] group-hover:text-[var(--primary)]">
                                  {s.name}
                                </span>
                                {s.desc && (
                                  <span className="block text-xs text-[#6B7280] mt-0.5 leading-snug">
                                    {s.desc}
                                  </span>
                                )}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-[#E5E7EB] px-4 py-3 bg-[#F8F9FC]">
                        <Link
                          to={link.path}
                          className="text-xs font-semibold text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                        >
                          View all {link.name.toLowerCase()} →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <button
            aria-label="Search"
            className="w-10 h-10 rounded-full text-[#6B7280] hover:text-[var(--primary)] hover:bg-[#F1ECF8] flex items-center justify-center transition-colors"
          >
            <Search size={18} />
          </button>
          <Link
            to="/book"
            className="btn-primary-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile actions: emergency + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="tel:1066"
            aria-label="Call emergency"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "var(--gradient-primary-btn)" }}
          >
            <Phone size={18} />
          </a>
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[#F1ECF8] transition-colors"
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile backdrop — sibling of <header> so the header's backdrop-filter
          doesn't trap these fixed elements in a 0-height containing block */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 bg-[#1F2937]/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      />

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed right-0 bottom-0 bg-white shadow-2xl transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: isScrolled ? 56 : 72,
          width: "min(360px, 92vw)",
          zIndex: 60,
        }}
      >
        <div className="h-full overflow-y-auto px-5 py-6 flex flex-col">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                location.pathname === link.path ||
                (link.submenu && link.submenu.some((s) => location.pathname.startsWith(s.path)));
              const hasSub = !!link.submenu?.length;
              const expanded = mobileSubmenu === link.name;
              if (!hasSub) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-[var(--ai-indigo-soft)] text-[var(--primary)]"
                        : "text-[#1F2937] hover:bg-[#F1ECF8]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <div
                  key={link.name}
                  className={`rounded-xl overflow-hidden border transition-colors ${
                    expanded ? "border-[var(--primary)]/20 bg-white shadow-sm" : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(expanded ? null : link.name)}
                    aria-expanded={expanded}
                    className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold transition-colors ${
                      expanded
                        ? "bg-[var(--ai-indigo-soft)] text-[var(--primary)]"
                        : active
                        ? "bg-[var(--ai-indigo-soft)] text-[var(--primary)]"
                        : "text-[#1F2937] hover:bg-[#F1ECF8]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        expanded
                          ? "bg-[var(--primary)] text-white rotate-180"
                          : "bg-[#F1ECF8] text-[var(--primary)]"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {expanded && (
                    <div className="bg-[#F8F9FC] border-t border-[#E5E7EB] p-2 grid gap-1">
                      {link.submenu!.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.name}
                            to={s.path}
                            className="flex items-start gap-3 px-3 py-3 rounded-lg bg-white border border-[#E5E7EB] hover:border-[var(--primary)]/30 hover:bg-[#F1ECF8] transition-colors"
                          >
                            {Icon && (
                              <span
                                className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                                style={{ background: "var(--gradient-primary-btn)" }}
                              >
                                <Icon size={18} />
                              </span>
                            )}
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-[#1F2937]">
                                {s.name}
                              </span>
                              {s.desc && (
                                <span className="block text-xs text-[#6B7280] mt-0.5 leading-snug">
                                  {s.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                      <Link
                        to={link.path}
                        className="mt-1 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:text-[var(--brand-accent)] inline-flex items-center gap-1"
                      >
                        View all {link.name.toLowerCase()} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
            <Link
              to="/book"
              className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl"
            >
              <Calendar size={18} /> Book Appointment
            </Link>
            <a
              href="tel:1066"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-[var(--brand-secondary)] border border-[#E5E7EB] hover:bg-[#F8F9FC] transition-colors"
            >
              <Phone size={18} /> Emergency · 1066
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2 text-sm text-[#6B7280]">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[var(--primary)]" /> Sector 12, New Delhi</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-[var(--primary)]" /> Open 24/7</span>
          </div>

          <div className="mt-auto pt-8 flex items-center justify-center gap-4 text-xs text-[#6B7280]">
            <Link to="/insurance">Insurance</Link>
            <span className="w-px h-3 bg-[#E5E7EB]" />
            <Link to="/careers">Careers</Link>
            <span className="w-px h-3 bg-[#E5E7EB]" />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
