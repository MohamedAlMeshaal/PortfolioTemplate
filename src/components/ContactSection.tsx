import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../context/LanguageContext";

const ContactSection: React.FC = () => {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mvgewqbb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(isArabic ? "شكراً للتواصل — سأرد عليك قريباً." : "Thanks for reaching out — I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(isArabic ? "حدث خطأ ما. يرجى المحاولة مجدداً." : "Something went wrong. Please try again.");
      }
    } catch {
      toast.error(isArabic ? "خطأ في الشبكة. يرجى المحاولة مجدداً." : "Network error. Please try again.");
    }
    setIsSubmitting(false);
  };

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-meshaal",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:border-blue-400/40 hover:text-blue-400",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/966560578827",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "hover:border-green-400/40 hover:text-green-400",
    },
    {
      label: "Email",
      href: "mailto:mohamed.saed.meshal@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:border-white/40 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {isArabic ? "تواصل معي" : "Get In Touch"}
        </motion.h2>

        <motion.p
          className="text-white/50 text-base mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {isArabic
            ? "إذا كنت ترى أن هناك قيمة يمكننا صنعها معاً، شاركني تفاصيلك وسأتواصل معك شخصياً."
            : "If you believe there's value we can create together, share your details, and I'll reach out personally."}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={isArabic ? "اسمك" : "Your Name"}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder={isArabic ? "بريدك الإلكتروني" : "Your Email"}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
              <textarea
                name="message"
                placeholder={isArabic ? "رسالتك" : "Your Message"}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting
                  ? (isArabic ? "جارٍ الإرسال..." : "Sending...")
                  : (isArabic ? "إرسال الرسالة" : "Send Message")}
              </button>
            </form>
          </motion.div>

          {/* Connect card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Social buttons */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-widest text-white/30 mb-5">
                {isArabic ? "تواصل عبر" : "Connect via"}
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 ${s.color}`}
                  >
                    {s.icon}
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email display */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-widest text-white/30 mb-3">
                {isArabic ? "أو راسلني على" : "Or email me at"}
              </p>
              <a
                href="mailto:mohamed.saed.meshal@gmail.com"
                className="text-white/70 hover:text-white transition-colors text-sm break-all"
              >
                mohamed.saed.meshal@gmail.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
