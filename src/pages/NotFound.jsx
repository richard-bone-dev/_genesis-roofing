import SEO from "../components/ui/SEO.jsx";
import ButtonLink from "../components/ui/ButtonLink.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found | Genesis Roofing & Building" description="The requested Genesis Roofing & Building website page could not be found." />
      <section className="section-padding pt-40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">404</p>
          <h1 className="heading-lg mt-4">This roofline does not lead to a page.</h1>
          <p className="body-lead mt-5">The page may have moved, or the service you are looking for may have changed.</p>
          <ButtonLink to="/" className="mt-8">Back to home</ButtonLink>
        </div>
      </section>
    </>
  );
}
