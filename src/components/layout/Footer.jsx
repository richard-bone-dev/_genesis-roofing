import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import company from "../../data/company.json";
import navigation from "../../data/navigation.json";
import services from "../../data/services.json";

export default function Footer() {
  return (
    <footer className="bg-lead-900 text-white">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.35fr_0.75fr_0.8fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-tile text-lg font-black">G</span>
            <span>
              <span className="block font-display text-2xl font-extrabold leading-none">{company.name}</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/55">{company.descriptor}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/70">{company.description}</p>
          <div className="mt-6 grid gap-2 text-sm font-semibold text-white/65">
            {company.trustIndicators.slice(0, 3).map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-brass">Navigation</h2>
          <ul className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-white/70 transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-brass">Services</h2>
          <ul className="mt-5 grid gap-3">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-white/70 transition hover:text-white">{service.navigationLabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-brass">Contact</h2>
          <ul className="mt-5 grid gap-4 text-white/70">
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-tile" /> <span>{company.addressDisplay}</span></li>
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-tile" /> <a href={company.mobileHref} className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40">{company.mobile}</a></li>
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-tile" /> <a href={company.landlineHref} className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40">{company.landline}</a></li>
            <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-tile" /> <a href={company.emailHref} className="break-words transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tile/40">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.legalLine}</p>
        </div>
      </div>
    </footer>
  );
}
