import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { ContactPage } from "./components/ContactPage";
import { DishModal } from "./components/DishModal";

interface Dish {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  image: string;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [currentPage, setCurrentPage] = useState<"home" | "menu" | "contact">("home");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2025/03/24/audio_aff0605bde.mp3?filename=ikoliks_aj-arabic-islamic-muslim-background-music-318228.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }

    setIsMusicPlaying((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleNavigate = (page: "home" | "menu" | "contact") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectDish = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCloseDishModal = () => {
    setSelectedDish(null);
  };

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar
            language={language}
            theme={theme}
            currentPage={currentPage}
            onLanguageToggle={toggleLanguage}
            onThemeToggle={toggleTheme}
            onNavigate={handleNavigate}
            isMusicPlaying={isMusicPlaying}
            onMusicToggle={toggleMusic}
          />

          <AnimatePresence mode="wait">
            {currentPage === "home" && (
              <HomePage
                key="home"
                language={language}
                theme={theme}
                onNavigateToMenu={() => handleNavigate("menu")}
              />
            )}
            {currentPage === "menu" && (
              <MenuPage
                key="menu"
                language={language}
                theme={theme}
                onSelectDish={handleSelectDish}
              />
            )}
            {currentPage === "contact" && (
              <ContactPage
                key="contact"
                language={language}
                theme={theme}
              />
            )}
          </AnimatePresence>

          <DishModal
            dish={selectedDish}
            language={language}
            theme={theme}
            onClose={handleCloseDishModal}
          />
        </>
      )}
    </div>
  );
}