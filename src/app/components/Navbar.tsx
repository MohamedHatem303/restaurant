import { Globe, Music, Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  language: "en" | "ar";
  theme: "dark" | "light";
  currentPage: "home" | "menu" | "contact";
  onLanguageToggle: () => void;
  onThemeToggle: () => void;
  onNavigate: (page: "home" | "menu" | "contact") => void;
  isMusicPlaying: boolean;
  onMusicToggle: () => void;
}

export function Navbar({
  language,
  theme,
  currentPage,
  onLanguageToggle,
  onThemeToggle,
  onNavigate,
  isMusicPlaying,
  onMusicToggle,
}: NavbarProps) {
  const isRTL = language === "ar";

  const translations = {
    home: { en: "Home", ar: "الرئيسية" },
    menu: { en: "Menu", ar: "القائمة" },
    contact: { en: "Contact", ar: "تواصل" },
    brand: { en: "NOIR BISTRO", ar: "نوار بيسترو" },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 ${
        theme === "dark"
          ? "bg-black/80 border-zinc-800"
          : "bg-white/80 border-zinc-200"
      } backdrop-blur-md border-b`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wider cursor-pointer"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
            onClick={() => onNavigate("home")}
          >
            <span className="text-amber-500">{translations.brand[language].split(' ')[0]}</span>
            <span className={theme === "dark" ? "text-white" : "text-black"}>
              {' '}{translations.brand[language].split(' ')[1]}
            </span>
          </motion.div>

          <div className="flex items-center gap-8">
            {(["home", "menu", "contact"] as const).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(page)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentPage === page
                    ? "text-amber-500"
                    : theme === "dark"
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-black"
                }`}
                style={{ fontFamily: isRTL ? 'Cairo' : 'Poppins' }}
              >
                {translations[page][language]}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMusicToggle}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "hover:bg-zinc-800"
                  : "hover:bg-zinc-100"
              }`}
            >
              <Music
                className={isMusicPlaying ? "text-amber-500" : theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
                size={20}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onThemeToggle}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "hover:bg-zinc-800"
                  : "hover:bg-zinc-100"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="text-amber-500" size={20} />
              ) : (
                <Moon className="text-zinc-600" size={20} />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLanguageToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === "dark"
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-zinc-100 hover:bg-zinc-200"
              }`}
            >
              <Globe size={16} className={theme === "dark" ? "text-amber-500" : "text-amber-600"} />
              <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                {language === "en" ? "AR" : "EN"}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
