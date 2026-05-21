import { Star } from "lucide-react";
import reviews from "../data/reviews.json";
import company from "../data/company.json";
import seo from "../data/seo.json";
import page from "../data/pages/reviews.json";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/sections/PageHero.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import ReviewsCarousel from "../components/sections/ReviewsCarousel.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Reviews() {
  return (
    <>
      <SEO title={seo.reviews.title} description={seo.reviews.description} image={company.hero.image} />
      <PageHero compact eyebrow={page.hero.eyebrow} title={page.hero.title} text={page.hero.text} image={page.hero.image} />
      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow={page.featured.eyebrow} title={page.featured.title} text={page.featured.text} />
          <ReviewsCarousel reviews={reviews.filter((review) => review.featured)} />
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader align="center" eyebrow={page.all.eyebrow} title={page.all.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.date}`} className="rounded-lg bg-paper p-6 shadow-sm ring-1 ring-borderline">
                <div className="flex gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className={`h-4 w-4 ${index < review.rating ? "fill-current" : ""}`} />
                  ))}
                </div>
                <p className="mt-5 text-lg font-semibold leading-8 text-ink/80">"{review.text}"</p>
                <div className="mt-6 border-t border-borderline pt-5">
                  <h3 className="font-display text-xl font-extrabold">{review.name}</h3>
                  <p className="mt-1 text-sm font-bold text-muted">{review.location} - {review.service}</p>
                  <p className="mt-1 text-sm text-muted">{review.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={page.cta.title} text={page.cta.text} />
    </>
  );
}
