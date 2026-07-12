import { useParams, useNavigate } from "react-router-dom";
import { worksData } from "@/lib/worksData";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function WorkDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const work = worksData.find((w) => w.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  if (!work) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg">Project not found.</p>
          <button
            onClick={handleBack}
            className="text-sm text-white/70 hover:text-white underline"
          >
            ← Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-12">
          <button
            onClick={handleBack}
            className="text-sm text-white/50 hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <span className="text-lg">←</span>
            <span>Back</span>
          </button>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 uppercase tracking-widest">
            {work.type}
          </span>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            {work.title}
          </h1>
          <p className="text-white/50 text-lg mb-8">{work.subtitle}</p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-white/20 mb-10" />

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            {work.description}
          </p>

          {/* Details */}
          {work.details && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 mb-10">
              <h2 className="text-sm uppercase tracking-widest text-white/30 mb-4">
                How It Was Built
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                {work.details}
              </p>
            </div>
          )}

          {/* Tags */}
          {work.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {/* Images */}
          {work.images && work.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-sm uppercase tracking-widest text-white/30 mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {work.images.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                  >
                    <img
                      src={src}
                      alt={`${work.title} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
