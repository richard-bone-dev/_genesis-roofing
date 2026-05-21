import company from "../data/company.json";
import services from "../data/services.json";
import seo from "../data/seo.json";
import page from "../data/pages/services.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Services() {
  return (
    <>
      <SEO title={seo.services.title} description={seo.services.description} image={services[0].heroImage} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={page.hero.image} />
      <section className="section-padding">
        <div className="container-page">
          <SectionHeader eyebrow={page.intro.eyebrow} title={page.intro.title} text={company.description} />
          <div className="mt-10">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>
      <CTASection title={page.cta.title} text={page.cta.text} />
    </>
  );
}
