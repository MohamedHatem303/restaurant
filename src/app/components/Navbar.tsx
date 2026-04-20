import { useState } from "react";
import { Globe, Music, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = language === "ar";

  const translations = {
    home: { en: "Home", ar: "الرئيسية" },
    menu: { en: "Menu", ar: "القائمة" },
    contact: { en: "Contact", ar: "تواصل" },
    brand: { en: "NOIR BISTRO", ar: "نوار بيسترو" },
  };

  const navItems = ["home", "menu", "contact"] as const;

  const handleNavigate = (page: "home" | "menu" | "contact") => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === "dark"
          ? "bg-black/80 border-zinc-800"
          : "bg-white/85 border-zinc-200"
      } backdrop-blur-md border-b`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer select-none whitespace-nowrap text-lg font-bold tracking-wider sm:text-2xl"
            style={{ fontFamily: isRTL ? "Cairo" : "Playfair Display" }}
            onClick={() => handleNavigate("home")}
          >
            <span className="text-amber-500">
              {translations.brand[language].split(" ")[0]}
            </span>
            <span className={theme === "dark" ? "text-white" : "text-black"}>
              {" "}
              {translations.brand[language].split(" ")[1]}
            </span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavigate(page)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentPage === page
                    ? "text-amber-500"
                    : theme === "dark"
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-black"
                }`}
                style={{ fontFamily: isRTL ? "Cairo" : "Poppins" }}
              >
                {translations[page][language]}
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <motion.button
              whileHover={{ scale: 1.08, rotate: 12 }}
              whileTap={{ scale: 0.96 }}
              onClick={onMusicToggle}
              className={`rounded-full p-2 transition-colors ${
                theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
              }`}
              aria-label="Toggle music"
            >
              <Music
                className={
                  isMusicPlaying
                    ? "text-amber-500"
                    : theme === "dark"
                    ? "text-zinc-400"
                    : "text-zinc-600"
                }
                size={18}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={onThemeToggle}
              className={`rounded-full p-2 transition-colors ${
                theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="text-amber-500" size={18} />
              ) : (
                <Moon className="text-zinc-600" size={18} />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onLanguageToggle}
              className={`flex items-center gap-2 rounded-full px-3 py-2 transition-colors sm:px-4 ${
                theme === "dark"
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-zinc-100 hover:bg-zinc-200"
              }`}
              aria-label="Toggle language"
            >
              <Globe
                size={16}
                className={theme === "dark" ? "text-amber-500" : "text-amber-600"}
              />
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {language === "en" ? "AR" : "EN"}
              </span>
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`ml-1 rounded-full p-2 transition-colors md:hidden ${
                theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
              }`}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X
                  size={20}
                  className={theme === "dark" ? "text-white" : "text-black"}
                />
              ) : (
                <Menu
                  size={20}
                  className={theme === "dark" ? "text-white" : "text-black"}
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden border-t ${
              theme === "dark" ? "border-zinc-800" : "border-zinc-200"
            } ${theme === "dark" ? "bg-black/95" : "bg-white/95"}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-2">
                {navItems.map((page) => (
                  <motion.button
                    key={page}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigate(page)}
                    className={`w-full rounded-xl px-4 py-3 text-start text-base font-medium transition-colors ${
                      currentPage === page
                        ? "bg-amber-500/10 text-amber-500"
                        : theme === "dark"
                        ? "text-zinc-300 hover:bg-zinc-800"
                        : "text-zinc-700 hover:bg-zinc-100"
                    }`}
                    style={{ fontFamily: isRTL ? "Cairo" : "Poppins" }}
                  >
                    {translations[page][language]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}