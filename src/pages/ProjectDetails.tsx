import { useParams } from "react-router-dom";
// 👇 إذا يشتغل عندك alias "@", خله كذا:
import { projectsData } from "@/lib/projectsData";
// 👇 لو عطاك خطأ في السطر فوق، استبدله بهذا بدلًا عنه:
// import { projectsData } from "../lib/projectsData";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Project not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Title + Date */}
        <h1 className="text-3xl md:text-4xl font-bold italic">{project.title}</h1>
        {project.date && <p className="text-white/60 mt-2">{project.date}</p>}

        {/* Description */}
        <p className="mt-6 text-neutral-300 leading-relaxed">{project.description}</p>

        {/* Role & Outcome */}
        <div className="mt-4 space-y-1 text-white/70">
          {project.role && (
            <p>
              <span className="text-white/50">Role:</span> {project.role}
            </p>
          )}
          {project.outcome && (
            <p>
              <span className="text-white/50">Outcome:</span> {project.outcome}
            </p>
          )}
        </div>

        {/* Tags */}
        {project.tags?.length ? (
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-10 mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="aspect-video overflow-hidden rounded-xl border border-white/10"
                >
                  <img
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Video */}
        {project.videoUrl && (
          <>
            <h2 className="text-xl font-semibold mt-10 mb-4">Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={project.videoUrl}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

