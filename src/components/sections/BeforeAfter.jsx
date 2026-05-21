export default function BeforeAfter({ project }) {
  if (!project) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Before and after</p>
            <h2 className="heading-lg mt-4">{project.title}</h2>
            <p className="body-lead mt-5">{project.summary}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Before", project.beforeImage],
              ["After", project.afterImage]
            ].map(([label, image]) => (
              <div key={label} className="group relative overflow-hidden rounded-lg">
                <img src={image} alt="" className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-lead-900 shadow">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
