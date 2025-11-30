import { useParams, Link } from "react-router-dom";
import { useState } from "react";
// جرّب هذا أولاً، إذا عطاك خطأ في alias "@", استبدله بالسطر اللي بعده
import { projectsData } from "@/lib/projectsData";
// لو طلع خطأ، علّق السطر اللي فوق واستخدم هذا:
// import { projectsData } from "../lib/projectsData";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

    const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg">Project not found.</p>
          <Link
            to="/#projects"
            className="text-sm text-white/70 hover:text-white underline"
          >
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/#projects"
            className="text-sm text-white/60 hover:text-white/90 inline-flex items-center gap-2"
          >
            <span className="text-lg">←</span>
            <span>Back to Featured Projects</span>
          </Link>

          {project.date && (
            <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              {project.date}
            </span>
          )}
        </div>

        {/* Title & summary */}
        <header className="space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold italic leading-tight">
            {project.title}
          </h1>

          {project.role && (
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/50">Role:&nbsp;</span>
              {project.role}
            </p>
          )}

          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          {project.outcome && (
            <p className="text-sm md:text-base text-white/80">
              <span className="text-white/50">Key Outcomes:&nbsp;</span>
              {project.outcome}
            </p>
          )}

          {/* Tags */}
          {project.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

              {/* Media section */}
      {(project.images && project.images.length > 0) ||
      (project.videos && project.videos.length > 0) ? (
        <section className="space-y-8 mt-10">
          {project.images && project.images.length > 0 && (
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Event Gallery
              </h2>
            <section className="space-y-8 mt-10">
  {project.images && project.images.length > 0 && (
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Event Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveImage(src)}
            className="group aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900 focus:outline-none"
          >
            <img
              src={src}
              alt={`${project.title} ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  )}
</section>

          {project.videos && project.videos.length > 0 && (
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Event Highlight Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.videos.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900"
                  >
                    <video
                      src={src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      ) : null}
            </div>
    </main>
  );
}
