import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

interface ContactPageProps {
  language: "en" | "ar";
  theme: "dark" | "light";
}

export function ContactPage({ language, theme }: ContactPageProps) {
  const isRTL = language === "ar";

  const translations = {
    title: { en: "Get in Touch", ar: "تواصل معنا" },
    subtitle: {
      en: "We'd love to hear from you. Reach out for reservations or inquiries.",
      ar: "نحب أن نسمع منك. تواصل معنا للحجوزات أو الاستفسارات.",
    },
    whatsapp: { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },
    phone: { en: "Phone", ar: "الهاتف" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    location: { en: "Location", ar: "الموقع" },
    hours: { en: "Opening Hours", ar: "ساعات العمل" },
    hoursText: {
      en: "Monday - Sunday: 12:00 PM - 11:00 PM",
      ar: "الإثنين - الأحد: 12:00 م - 11:00 م",
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      label: translations.phone[language],
      value: "+201110550523",
    },
    {
      icon: Mail,
      label: translations.email[language],
      value: "mohamedhatm303@gmail.com",
    },
    {
      icon: MapPin,
      label: translations.location[language],
      value: language === "en" ? "Mansoura El-Gaish St Mogama Al Mahakm" : "المنصورة ، شارع الجيش، مجمع المحاكم ",
    },
  ];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`min-h-screen pt-24 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1
            className="text-6xl md:text-8xl font-bold mb-6"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
          >
            {translations.title[language]}
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
            style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
          >
            {translations.subtitle[language]}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <motion.a
              href="https://wa.me/01110500523"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-4 px-12 py-6 bg-green-500 text-white rounded-2xl hover:bg-green-400 transition-colors shadow-lg"
            >
              <MessageCircle size={28} />
              <span
                className="text-2xl font-semibold"
                style={{ fontFamily: isRTL ? 'Cairo' : 'Poppins' }}
              >
                {translations.whatsapp[language]}
              </span>
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-8 rounded-2xl ${
                  theme === "dark" ? "bg-zinc-900" : "bg-zinc-50"
                }`}
              >
                <item.icon className="text-amber-500 mb-4" size={32} />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: isRTL ? 'Cairo' : 'Poppins' }}
                >
                  {item.label}
                </h3>
                <p
                  className={theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
                  style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`p-12 rounded-2xl text-center ${
              theme === "dark" ? "bg-zinc-900" : "bg-zinc-50"
            }`}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
            >
              {translations.hours[language]}
            </h3>
            <p
              className={`text-xl ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
              style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
            >
              {translations.hoursText[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
