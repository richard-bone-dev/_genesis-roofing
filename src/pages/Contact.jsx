import { Clock, Mail, MapPin, Phone } from "lucide-react";
import company from "../data/company.json";
import seo from "../data/seo.json";
import page from "../data/pages/contact.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import ContactForm from "../components/sections/ContactForm.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Contact() {
  const address = `${company.address.line1}, ${company.address.town}, ${company.address.county} ${company.address.postcode}`;

  return (
    <>
      <SEO title={seo.contact.title} description={seo.contact.description} image={company.hero.image} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={page.hero.image} />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow={page.details.eyebrow} title={page.details.title} text={page.details.text} />
            <div className="mt-8 grid gap-4">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-borderline">
                <Phone className="mt-1 h-5 w-5 text-tile" />
                <span><strong className="block">Phone</strong>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-borderline">
                <Mail className="mt-1 h-5 w-5 text-tile" />
                <span><strong className="block">Email</strong>{company.email}</span>
              </a>
              <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-borderline">
                <MapPin className="mt-1 h-5 w-5 text-tile" />
                <span><strong className="block">Address</strong>{address}</span>
              </div>
              <div className="rounded-lg bg-lead-900 p-5 text-white">
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 text-brass" />
                  <div>
                    <strong className="block">Business hours</strong>
                    <div className="mt-3 grid gap-2 text-white/75">
                      {company.hours.map((item) => (
                        <p key={item.day} className="flex justify-between gap-6"><span>{item.day}</span><span>{item.time}</span></p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
