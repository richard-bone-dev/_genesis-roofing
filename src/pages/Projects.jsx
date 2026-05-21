import projects from "../data/projects.json";
import seo from "../data/seo.json";
import page from "../data/pages/projects.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import ProjectsGrid from "../components/sections/ProjectsGrid.jsx";
import BeforeAfter from "../components/sections/BeforeAfter.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Projects() {
  return (
    <>
      <SEO title={seo.projects.title} description={seo.projects.description} image={projects.items[0].image} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={projects.items[0].image} />
      <section className="section-padding">
        <div className="container-page">
          <SectionHeader eyebrow={page.gallery.eyebrow} title={page.gallery.title} text={page.gallery.text} />
          <div className="mt-10">
            <ProjectsGrid projects={projects.items} categories={projects.categories} masonry />
          </div>
        </div>
      </section>
      <BeforeAfter project={projects.items[0]} />
      <CTASection title={page.cta.title} text={page.cta.text} />
    </>
  );
}
