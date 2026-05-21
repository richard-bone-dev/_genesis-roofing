import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import company from "../../data/company.json";
import navigation from "../../data/navigation.json";
import ButtonLink from "../ui/ButtonLink.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const transparent = location.pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }) =>
    `text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40 ${isActive ? "text-tile" : transparent ? "text-white/90 hover:text-white" : "text-muted hover:text-tile"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${transparent ? "text-white" : "bg-paper/95 text-ink shadow-sm backdrop-blur-xl"}`}>
      <div className={`hidden border-b lg:block ${transparent ? "border-white/15" : "border-borderline"}`}>
        <div className="container-page flex h-10 items-center justify-between text-xs font-semibold">
          <p className={transparent ? "text-white/75" : "text-muted"}>{company.descriptor}</p>
          <div className="flex items-center gap-6">
            <a href={company.mobileHref} className="inline-flex items-center gap-2 transition hover:text-tile focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40">
              <Phone className="h-3.5 w-3.5" /> {company.mobile}
            </a>
            <a href={company.emailHref} className="transition hover:text-tile focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40">{company.email}</a>
          </div>
        </div>
      </div>

      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className={`grid h-11 w-11 place-items-center rounded-full border text-lg font-black ${transparent ? "border-white/40 bg-white/10" : "border-lead-900/10 bg-lead-900 text-white"}`}>G</span>
          <span>
            <span className="block font-display text-xl font-extrabold leading-none">{company.name}</span>
            <span className={`block text-[11px] font-bold uppercase tracking-[0.12em] ${transparent ? "text-white/60" : "text-muted"}`}>{company.headerLabel}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" variant={transparent ? "light" : "primary"}>Get a free quote</ButtonLink>
        </div>

        <button
          className={`inline-grid h-11 w-11 place-items-center rounded-full border lg:hidden ${transparent ? "border-white/40 bg-white/10" : "border-borderline bg-white"}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-borderline bg-paper shadow-lift lg:hidden">
          <div className="container-page grid gap-2 py-5">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-xl px-3 py-3 text-base font-bold ${isActive ? "bg-lead-900 text-white" : "text-ink hover:bg-white"}`}>
                {item.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" className="mt-2 w-full">Request a quote</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
