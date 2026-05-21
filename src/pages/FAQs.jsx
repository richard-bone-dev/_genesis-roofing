import faqs from "../data/faq.json";
import company from "../data/company.json";
import seo from "../data/seo.json";
import page from "../data/pages/faqs.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import FAQAccordion from "../components/sections/FAQAccordion.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function FAQs() {
  const categories = [...new Set(faqs.map((item) => item.category))];

  return (
    <>
      <SEO title={seo.faqs.title} description={seo.faqs.description} image={company.hero.image} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={page.hero.image} />
      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <SectionHeader eyebrow={page.categories.eyebrow} title={page.categories.title} />
            <div className="mt-7 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-muted shadow-sm ring-1 ring-borderline">{category}</span>
              ))}
            </div>
          </aside>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTASection title={page.cta.title} text={page.cta.text} />
    </>
  );
}
