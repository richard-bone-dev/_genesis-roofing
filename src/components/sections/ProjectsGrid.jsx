import { useState } from "react";
import { X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-lead-900/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-lg bg-paper shadow-lift">
        <div className="relative">
          <img src={project.image} alt="" className="h-72 w-full object-cover sm:h-96" />
          <button onClick={onClose} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow" aria-label="Close project details">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <p className="eyebrow">{project.category} - {project.location}</p>
            <h2 id="project-modal-title" className="mt-3 font-display text-3xl font-extrabold">{project.title}</h2>
            <p className="body-lead mt-4">{project.details}</p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-tile">Project highlights</p>
            <ul className="mt-4 grid gap-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="rounded-md bg-paper px-4 py-3 font-semibold text-ink/75">{highlight}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">Duration: {project.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid({ projects, categories, masonry = false, limit }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filtered = projects.filter((project) => filter === "All" || project.category === filter);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      {categories && (
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition ${filter === category ? "bg-lead-900 text-white" : "bg-white text-muted hover:bg-limestone"}`}>
              {category}
            </button>
          ))}
        </div>
      )}
      <div className={masonry ? "masonry" : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"}>
        {visible.map((project) => (
          <button key={project.id} onClick={() => setSelected(project)} className="group block w-full overflow-hidden rounded-lg bg-white text-left shadow-sm ring-1 ring-borderline transition hover:-translate-y-1 hover:shadow-premium">
            <div className="relative overflow-hidden">
              <img src={project.image} alt="" className={`${masonry ? "h-auto min-h-72" : "h-72"} w-full object-cover transition duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-lead-900/80 via-lead-900/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brass">{project.category} - {project.duration}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold">{project.title}</h3>
                <p className="mt-1 text-sm text-white/70">{project.location}</p>
              </div>
            </div>
            <p className="p-5 leading-7 text-muted">{project.summary}</p>
          </button>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
