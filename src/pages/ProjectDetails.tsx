import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "@/lib/projectsData";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isArabic } = useLanguage();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBack = () => navigate(-1);

  const formatDateAr = (date: string): string => {
    const months: Record<string, string> = {
      January: "يناير", February: "فبراير", March: "مارس",
      April: "أبريل", May: "مايو", June: "يونيو",
      July: "يوليو", August: "أغسطس", September: "سبتمبر",
      October: "أكتوبر", November: "نوفمبر", December: "ديسمبر",
    };
    let result = date;
    Object.entries(months).forEach(([en, ar]) => {
      result = result.replace(en, ar);
    });
    return result;
  };

  const labels = {
    notFound: isArabic ? "المشروع غير موجود." : "Project not found.",
    back: isArabic ? "رجوع" : "Back",
    role: isArabic ? "الدور" : "Role",
    keyOutcomes: isArabic ? "النتائج الرئيسية" : "Key Outcomes",
    gallery: isArabic ? "معرض الصور" : "Event Gallery",
    videos: isArabic ? "مقاطع الفيديو" : "Event Highlight Videos",
    prevLabel: isArabic ? "المشروع السابق" : "Previous",
    nextLabel: isArabic ? "المشروع التالي" : "Next",
    see: isArabic ? "شاهد" : "View",
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg">{labels.notFound}</p>
          <button onClick={handleBack} className="text-sm text-white/70 hover:text-white underline">
            ← {labels.back}
          </button>
        </div>
      </main>
    );
  }

  const images = project.images;
  const videos = project.videos;
  const hasImages = Array.isArray(images) && images.length > 0;
  const hasVideos = Array.isArray(videos) && videos.length > 0;

  const title = isArabic && project.title_ar ? project.title_ar : project.title;
  const description = isArabic && project.description_ar ? project.description_ar : project.description;
  const outcome = isArabic && project.outcome_ar ? project.outcome_ar : project.outcome;
  const role = isArabic && project.role_ar ? project.role_ar : project.role;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-32">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={handleBack}
            className="text-sm text-white/60 hover:text-white/90 inline-flex items-center gap-2"
          >
            <span className="text-lg">←</span>
            <span>{labels.back}</span>
          </button>
          {project.date && (
            <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              {isArabic ? formatDateAr(project.date) : project.date}
            </span>
          )}
        </div>

        <header className="space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold italic leading-tight">{title}</h1>
          {role && (
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/50">{labels.role}:&nbsp;</span>{role}
            </p>
          )}
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">{description}</p>
          {outcome && (
            <p className="text-sm md:text-base text-white/80">
              <span className="text-white/60">{labels.keyOutcomes}:&nbsp;</span>{outcome}
            </p>
          )}
          {project.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {(isArabic && project.tags_ar ? project.tags_ar : project.tags).map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-white/10 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {(hasImages || hasVideos) && (
          <section className="space-y-8 mt-10">
            {hasImages && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-4">{labels.gallery}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {images!.map((src, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                      <img src={src} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {hasVideos && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-4">{labels.videos}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos!.map((src, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                      <video src={src} controls className="w-full h-full" preload="metadata" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Previous */}
          {prevProject ? (
            <button
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="flex items-center gap-2 group max-w-[45%]"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors shrink-0">
                <ChevronLeft className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{labels.prevLabel}</p>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                  {labels.see} {isArabic && prevProject.title_ar ? prevProject.title_ar : prevProject.title}
                </p>
              </div>
            </button>
          ) : <div className="w-8" />}

          {/* Dots indicator */}
          <div className="flex gap-1.5 shrink-0">
            {projectsData.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          {nextProject ? (
            <button
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="flex items-center gap-2 group max-w-[45%]"
            >
              <div className="text-right hidden sm:block">
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{labels.nextLabel}</p>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                  {labels.see} {isArabic && nextProject.title_ar ? nextProject.title_ar : nextProject.title}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors shrink-0">
                <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
            </button>
          ) : <div className="w-8" />}

        </div>
      </div>
    </main>
  );
}
