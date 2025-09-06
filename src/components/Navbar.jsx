import { useEffect, useState, useRef } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const linkBase =
    "px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200";
  const linkActive = "bg-yellow-400 text-gray-900";
  const linkIdle = "text-white hover:text-white hover:bg-yellow-700/40";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#about"
          className="text-lg sm:text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition"
        >
          Gannah Eltonsy
        </a>

   
        <div className="hidden sm:flex flex-wrap gap-2 sm:gap-4 md:gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`${linkBase} ${active === l.id ? linkActive : linkIdle}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-yellow-300 hover:bg-gray-800"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
        
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

 
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden border-t border-gray-800 bg-black/95 overflow-hidden transition-all duration-200 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`${linkBase} block ${active === l.id ? linkActive : linkIdle}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
