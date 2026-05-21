import { Check } from "lucide-react";
import company from "../data/company.json";
import services from "../data/services.json";
import faqs from "../data/faq.json";
import projects from "../data/projects.json";
import seo from "../data/seo.json";
import page from "../data/pages/home.json";
import { getFeaturedProjects, getFeaturedReviews } from "../utils/content.js";
import SEO from "../components/ui/SEO.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import ButtonLink from "../components/ui/ButtonLink.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";
import ProjectsGrid from "../components/sections/ProjectsGrid.jsx";
import BeforeAfter from "../components/sections/BeforeAfter.jsx";
import StatsBand from "../components/sections/StatsBand.jsx";
import ReviewsCarousel from "../components/sections/ReviewsCarousel.jsx";
import FAQAccordion from "../components/sections/FAQAccordion.jsx";
import ProcessTimeline from "../components/sections/ProcessTimeline.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import TrustBar from "../components/sections/TrustBar.jsx";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredReviews = getFeaturedReviews();

  return (
    <>
      <SEO title={seo.home.title} description={seo.home.description} image={company.hero.image} />
      <PageHero
        eyebrow={company.hero.eyebrow}
        title={company.hero.title}
        text={company.hero.intro}
        image={company.hero.image}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
      />
      <TrustBar />

      <section className="section-padding">
        <div className="container-page">
          <SectionHeader eyebrow={page.services.eyebrow} title={page.services.title} text={page.services.text} />
          <div className="mt-10">
            <ServicesGrid services={services} limit={6} />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/services" variant="ghost">{page.services.button}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={company.story.image} alt="" className="aspect-[4/5] w-full rounded-lg object-cover shadow-premium" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{company.story.eyebrow}</p>
            <h2 className="heading-lg mt-4">{company.story.title}</h2>
            <p className="body-lead mt-5">{company.story.body}</p>
            <ul className="mt-7 grid gap-3">
              {company.whyChoose.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-3 font-semibold text-muted">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-tile" /> {item}
                </li>
              ))}
            </ul>
            <ButtonLink to="/about" className="mt-8">{page.story.button}</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow={page.featuredWork.eyebrow} title={page.featuredWork.title} />
            <ButtonLink to="/projects" variant="ghost">{page.featuredWork.button}</ButtonLink>
          </div>
          <ProjectsGrid projects={featuredProjects} />
        </div>
      </section>

      <BeforeAfter project={projects.items[2]} />

      <section className="section-padding bg-surface-grid bg-[length:28px_28px]">
        <div className="container-page">
          <SectionHeader align="center" eyebrow={page.whyChoose.eyebrow} title={page.whyChoose.title} text={page.whyChoose.text} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {company.whyChoose.map((item, index) => (
              <Reveal key={item} delay={index * 50} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-borderline">
                <span className="font-display text-3xl font-extrabold text-tile">0{index + 1}</span>
                <p className="mt-4 font-bold leading-7 text-ink/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader eyebrow={page.reviews.eyebrow} title={page.reviews.title} text={page.reviews.text} />
          <ReviewsCarousel reviews={featuredReviews} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader align="center" eyebrow={page.process.eyebrow} title={page.process.title} />
          <div className="mt-10">
            <ProcessTimeline items={company.process} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow={page.faqs.eyebrow} title={page.faqs.title} text={page.faqs.text} />
          <FAQAccordion items={faqs} limit={5} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
