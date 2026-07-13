import { useParams, useNavigate } from "react-router-dom";
import { worksData } from "@/lib/worksData";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WorkDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isArabic } = useLanguage();

  const currentIndex = worksData.findIndex((w) => w.slug === slug);
  const work = worksData[currentIndex];
  const prevWork = currentIndex > 0 ? worksData[currentIndex - 1] : null;
  const nextWork = currentIndex < worksData.length - 1 ? worksData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBack = () => navigate(-1);

  const labels = {
    notFound: isArabic ? "المشروع غير موجود." : "Project not found.",
    back: isArabic ? "رجوع" : "Back",
    howBuilt: isArabic ? "كيف بُني" : "How It Was Built",
    gallery: isArabic ? "معرض الصور" : "Gallery",
    prevLabel: isArabic ? "المشروع السابق" : "Previous",
    nextLabel: isArabic ? "المشروع التالي" : "Next",
    see: isArabic ? "شاهد" : "View",
  };

  const typeLabels: Record<string, string> = {
    "Digital Build": isArabic ? "بناء رقمي" : "Digital Build",
    "Field Operations": isArabic ? "عمليات ميدانية" : "Field Operations",
  };

  const worksAr: Record<string, { title: string; subtitle: string; description: string; details?: string }> = {
    "itqanops": {
      title: "إتقان",
      subtitle: "نظام إدارة العمليات الداخلية",
      description: "تطبيق ويب تقدمي عربي كامل مبني من الصفر لإدارة عمليات البرامج التدريبية. يغطي مراحل ما قبل وأثناء وبعد البرنامج، تذكيرات تيليغرام، تقارير تنفيذية بالذكاء الاصطناعي، تصدير PDF لعمليات الفنادق، والإدارة المالية للموردين.",
      details: "مبني بالكامل باستخدام Next.js وTypeScript وTailwind CSS وSupabase. يتضمن تذكيرات تيليغرام مزدوجة بدعم توقيت آسيا/الرياض، وتوليد تقارير تنفيذية عربية بالذكاء الاصطناعي، وتصدير PDF لعمليات الفنادق، ولوحة تحكم متعددة البرامج، وتتبع الموردين ماليًا. منشور كـ PWA على itqanops.vercel.app.",
    },
    "the-leader-app": {
      title: "تطبيق ذا ليدر",
      subtitle: "منصة إدارة المخيم الصيفي",
      description: "منصة تدير العمليات الكاملة لمخيم ذا ليدر الصيفي — قوائم الطلاب وتتبع الحضور والتسجيل وإصدار الشهادات وتقارير واتساب وإدارة الجدول الزمني.",
      details: "مبني باستخدام Next.js وTypeScript وSupabase وClerk. يتضمن خوارزمية تجميع تلقائي للطلاب مع فصل الجنسين وتوزيع الأعمار، وشبكة جدول زمني قابلة للتعديل، وتقارير واتساب بصياغة عربية مراعية للجنس، وإصدار شهادات PDF، وتطبيق كامل لأمان RLS.",
    },
    "product-tracking-system": {
      title: "نظام تتبع المنتجات",
      subtitle: "إدارة المخزون والمنتجات",
      description: "نظام مخزون منتجات يعمل على المتصفح مبني للاستخدام الداخلي، يتضمن أدوار المدير والموظف وتتبع المنتجات وإدارة المخزون في الوقت الفعلي.",
      details: "مبني باستخدام React وTypeScript وTailwind CSS مع localStorage للاستمرارية. يتضمن تحكمًا في الوصول حسب الدور مع واجهات منفصلة للمدير والموظف، وإدارة كتالوج المنتجات، وتتبع مستويات المخزون، وواجهة لوحة تحكم نظيفة.",
    },
    "20-programs": {
      title: "تنظيم أكثر من 20 برنامج",
      subtitle: "مسؤولية تشغيلية كاملة",
      description: "خططت ونسّقت ونفّذت أكثر من 20 برنامجاً من البداية للنهاية — تغطي الخدمات اللوجستية وإدارة المتطوعين والجدولة والعمليات الميدانية والرعايات والتقارير.",
      details: "تراوحت البرامج بين فعاليات جامعية وورش عمل قيادية وكرنفالات كبرى بحضور أكثر من 2000 شخص. شملت المسؤوليات الإدارة الكاملة للميزانية، وتنسيق المتطوعين (حتى 100+ متطوع)، واستقطاب الرعاة، وتنسيق التغطية الإعلامية، والخدمات اللوجستية الميدانية، وإعداد تقارير ما بعد الفعالية.",
    },
  };

  if (!work) {
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

  const arData = worksAr[work.slug];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-32">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        <div className="flex items-center justify-between gap-4 mb-12">
          <button
            onClick={handleBack}
            className="text-sm text-white/50 hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <span className="text-lg">←</span>
            <span>{labels.back}</span>
          </button>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 uppercase tracking-widest">
            {typeLabels[work.type] ?? work.type}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            {isArabic && arData ? arData.title : work.title}
          </h1>
          <p className="text-white/50 text-lg mb-8">
            {isArabic && arData ? arData.subtitle : work.subtitle}
          </p>

          <div className="w-16 h-[2px] bg-white/20 mb-10" />

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            {isArabic && arData ? arData.description : work.description}
          </p>

          {(work.details || (isArabic && arData?.details)) && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 mb-10">
              <h2 className="text-sm uppercase tracking-widest text-white/30 mb-4">
                {labels.howBuilt}
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                {isArabic && arData?.details ? arData.details : work.details}
              </p>
            </div>
          )}

          {work.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {work.images && work.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-sm uppercase tracking-widest text-white/30 mb-6">
                {labels.gallery}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {work.images.map((src, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                    <img src={src} alt={`${work.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Previous */}
          {prevWork ? (
            <button
              onClick={() => navigate(`/work/${prevWork.slug}`)}
              className="flex items-center gap-2 group max-w-[45%]"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors shrink-0">
                <ChevronLeft className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{labels.prevLabel}</p>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                  {labels.see} {isArabic && worksAr[prevWork.slug] ? worksAr[prevWork.slug].title : prevWork.title}
                </p>
              </div>
            </button>
          ) : <div className="w-8" />}

          {/* Dots indicator */}
          <div className="flex gap-1.5 shrink-0">
            {worksData.map((_, i) => (
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
          {nextWork ? (
            <button
              onClick={() => navigate(`/work/${nextWork.slug}`)}
              className="flex items-center gap-2 group max-w-[45%]"
            >
              <div className="text-right hidden sm:block">
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{labels.nextLabel}</p>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                  {labels.see} {isArabic && worksAr[nextWork.slug] ? worksAr[nextWork.slug].title : nextWork.title}
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
