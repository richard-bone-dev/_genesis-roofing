import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import company from "../data/company.json";
import seo from "../data/seo.json";
import page from "../data/pages/contact.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import ContactForm from "../components/sections/ContactForm.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ButtonLink from "../components/ui/ButtonLink.jsx";

export default function Contact() {
  const contactCards = [
    { label: "Mobile", value: company.mobile, href: company.mobileHref, icon: Phone },
    { label: "Landline", value: company.landline, href: company.landlineHref, icon: Phone },
    { label: "Email", value: company.email, href: company.emailHref, icon: Mail },
    { label: "Address", value: company.addressDisplay, icon: MapPin }
  ];

  return (
    <>
      <SEO title={seo.contact.title} description={seo.contact.description} image={company.hero.image} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={page.hero.image} />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={page.details.eyebrow} title={page.details.title} text={page.details.text} />
            <div className="mt-8 rounded-lg bg-white p-5 shadow-premium ring-1 ring-borderline sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-limestone text-tile">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-extrabold">Free roofing enquiries with a clear next step.</h2>
                  <p className="mt-2 leading-7 text-muted">Send photos by WhatsApp, call either number, or email the details of the roof issue and property access.</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={company.whatsappHref} className="sm:flex-1" showArrow={false}>Message us on WhatsApp</ButtonLink>
                <ButtonLink href={company.mobileHref} variant="ghost" className="sm:flex-1" showArrow={false}>Call Genesis Roofing</ButtonLink>
              </div>

              <div className="mt-6 grid gap-3">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-tile" />
                      <span className="min-w-0">
                        <strong className="block text-sm uppercase tracking-[0.08em] text-muted">{item.label}</strong>
                        <span className="mt-1 block break-words font-bold leading-6">{item.value}</span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="flex gap-4 rounded-md bg-paper p-4 ring-1 ring-borderline transition hover:bg-white hover:ring-tile focus:outline-none focus-visible:ring-4 focus-visible:ring-tile/30">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex gap-4 rounded-md bg-paper p-4 ring-1 ring-borderline">
                      {content}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 flex gap-3 border-t border-borderline pt-4 text-sm font-semibold text-muted">
                <Building2 className="h-4 w-4 shrink-0 text-tile" />
                {company.legalLine}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <div className="grid min-h-[360px] place-items-center rounded-lg bg-limestone bg-surface-grid bg-[length:28px_28px] p-8 text-center ring-1 ring-borderline">
            <div>
              <MapPin className="mx-auto h-10 w-10 text-tile" />
              <h2 className="mt-4 font-display text-3xl font-extrabold">{page.map.title}</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">{page.map.text}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={page.cta.title} text={page.cta.text} />
    </>
  );
}
