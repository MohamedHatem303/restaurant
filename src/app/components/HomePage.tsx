import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  language: "en" | "ar";
  theme: "dark" | "light";
  onNavigateToMenu: () => void;
}

export function HomePage({ language, theme, onNavigateToMenu }: HomePageProps) {
  const isRTL = language === "ar";

  const translations = {
    hero: {
      title: { en: "Experience Culinary", ar: "تجربة فن الطهي" },
      subtitle: { en: "Excellence", ar: "المتميز" },
      tagline: { en: "Where every dish tells a story", ar: "حيث كل طبق يحكي قصة" },
      cta: { en: "Explore Menu", ar: "استكشف القائمة" },
    },
    featured: {
      title: { en: "Featured Dish", ar: "الطبق المميز" },
      dishName: { en: "Truffle Mushroom Pizza", ar: "بيتزا الكمأة والفطر" },
      description: {
        en: "Handcrafted with black truffle, wild mushrooms, and aged parmesan on a wood-fired crust",
        ar: "مصنوعة يدوياً مع الكمأة السوداء والفطر البري وجبن البارميزان المعتق على قشرة محمصة بالحطب",
      },
    },
    story: {
      title: { en: "Our Story", ar: "قصتنا" },
      content: {
        en: "At Noir Bistro, we believe in creating moments that linger. Each dish is a carefully orchestrated symphony of flavors, crafted with passion and precision.",
        ar: "في نوار بيسترو، نؤمن بخلق لحظات لا تُنسى. كل طبق هو سيمفونية منسقة بعناية من النكهات، مصنوعة بشغف ودقة.",
      },
    },
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/70" : "bg-white/70"}`} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
          >
            {translations.hero.title[language]}
            <br />
            <span className="text-amber-500">{translations.hero.subtitle[language]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`text-xl md:text-2xl mb-12 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
            style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
          >
            {translations.hero.tagline[language]}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToMenu}
            className="px-12 py-4 bg-amber-500 text-black font-semibold text-lg rounded-full hover:bg-amber-400 transition-colors"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Poppins' }}
          >
            {translations.hero.cta[language]}
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-amber-500" size={40} />
        </motion.div>
      </section>

      <section className="min-h-screen relative flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762631176795-d500f0472051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Featured Dish"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/80" : "bg-white/80"}`} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.p
            className="text-amber-500 text-sm tracking-[0.3em] mb-4 uppercase"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Poppins' }}
          >
            {translations.featured.title[language]}
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
          >
            {translations.featured.dishName[language]}
          </h2>

          <p
            className={`text-xl md:text-2xl ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} leading-relaxed`}
            style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
          >
            {translations.featured.description[language]}
          </p>
        </motion.div>
      </section>

      <section className={`py-32 px-6 ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-50"}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
          >
            {translations.story.title[language]}
          </h2>

          <p
            className={`text-xl md:text-2xl leading-relaxed ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
            style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
          >
            {translations.story.content[language]}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
