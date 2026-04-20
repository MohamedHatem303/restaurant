import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Dish {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  image: string;
}

interface DishModalProps {
  dish: Dish | null;
  language: "en" | "ar";
  theme: "dark" | "light";
  onClose: () => void;
}

export function DishModal({ dish, language, theme, onClose }: DishModalProps) {
  const isRTL = language === "ar";

  if (!dish) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-5xl ${
            theme === "dark" ? "bg-zinc-900" : "bg-white"
          } rounded-3xl overflow-hidden shadow-2xl max-h-[90vh]`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className={`absolute top-5 ${
              isRTL ? "left-5" : "right-5"
            } z-20 p-3 rounded-full ${
              theme === "dark"
                ? "bg-black/50 hover:bg-black/70"
                : "bg-white/60 hover:bg-white/80"
            } backdrop-blur-md transition-colors`}
          >
            <X className={theme === "dark" ? "text-white" : "text-black"} size={22} />
          </motion.button>

          <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
            <div className="relative flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8">
              <ImageWithFallback
                src={dish.image}
                alt={dish.name[language]}
                className="w-auto h-auto max-w-full max-h-[42vh] md:max-h-[80vh] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>

            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 uppercase">
                  {language === "en" ? "Signature Dish" : "طبق مميز"}
                </p>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: isRTL ? "Cairo" : "Playfair Display" }}
                >
                  {dish.name[language]}
                </h2>

                <p
                  className={`text-base sm:text-lg md:text-xl mb-8 leading-relaxed ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}
                  style={{ fontFamily: isRTL ? "Tajawal" : "Poppins" }}
                >
                  {dish.description[language]}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl sm:text-4xl font-bold text-amber-500">
                    {dish.price}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors"
                    style={{ fontFamily: isRTL ? "Cairo" : "Poppins" }}
                  >
                    {language === "en" ? "Order Now" : "اطلب الآن"}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}