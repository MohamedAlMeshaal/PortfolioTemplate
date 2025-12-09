import React from "react";

const ResumeRequestSection: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative py-20 px-4 bg-black/80 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Request My Resume
        </h2>

        <p className="text-white/70 mb-6 text-sm md:text-base leading-relaxed">
          For privacy reasons, I share my full resume on request. 
          If you’d like a copy, contact me directly and I’ll be happy to send it.
        </p>

        <div className="flex flex-wrap gap-3">
          {/* زر الإيميل */}
          <a
            href="mailto:mhmsaed200213?subject=Resume%20Request&body=Hi%20Mohamed%2C%0D%0A%0D%0AI%27d%20like%20to%20request%20a%20copy%20of%20your%20resume.%0D%0A%0D%0ABest%20regards%2C%0D%0A"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Email me for my resume
          </a>

          {/* زر الواتساب – عدّل الرقم */}
          <a
            href="https://wa.me/97336494645?text=Hi%20Mohamed%2C%20I%27d%20like%20to%20request%20your%20resume."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/75 hover:bg-white/5 transition-colors"
          >
            Or contact me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeRequestSection;
