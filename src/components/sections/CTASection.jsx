import company from "../../data/company.json";
import ButtonLink from "../ui/ButtonLink.jsx";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function CTASection({ title = company.cta.title, text = company.cta.text }) {
  const contactItems = [
    { label: "Mobile", value: company.mobile, href: company.mobileHref, icon: Phone },
    { label: "Landline", value: company.landline, href: company.landlineHref, icon: Phone },
    { label: "Email", value: company.email, href: company.emailHref, icon: Mail },
    { label: "Address", value: company.addressDisplay, icon: MapPin }
  ];

  return (
    <section className="bg-graphite py-16 text-white sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">{company.cta.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 leading-8 text-white/70">{text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {company.trustIndicators.slice(0, 4).map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={company.whatsappHref} variant="light">Message us on WhatsApp</ButtonLink>
            <ButtonLink href={company.mobileHref} variant="outline">Call Genesis Roofing</ButtonLink>
            <ButtonLink to="/contact" variant="outline">{company.cta.primary}</ButtonLink>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 text-ink shadow-premium ring-1 ring-white/10 sm:p-7">
          <div className="flex items-start gap-4 border-b border-borderline pb-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-limestone text-tile">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold">Start with a quick roofing enquiry.</h3>
              <p className="mt-2 leading-7 text-muted">Send photos, call, or email and Genesis Roofing will help you choose the sensible next step.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-tile" />
                  <span className="min-w-0">
                    <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-muted">{item.label}</span>
                    <span className="mt-1 block break-words font-bold leading-6 text-ink">{item.value}</span>
                  </span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="flex gap-3 rounded-md bg-paper p-4 ring-1 ring-borderline transition hover:bg-white hover:ring-tile focus:outline-none focus-visible:ring-4 focus-visible:ring-tile/30">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="flex gap-3 rounded-md bg-paper p-4 ring-1 ring-borderline">
                  {content}
                </div>
              );
            })}
          </div>

          <p className="mt-5 border-t border-borderline pt-4 text-sm font-semibold text-muted">{company.legalLine}</p>
        </div>
      </div>
    </section>
  );
}
