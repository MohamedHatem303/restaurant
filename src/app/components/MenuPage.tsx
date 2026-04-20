import { motion } from "motion/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Dish {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  image: string;
}

interface MenuPageProps {
  language: "en" | "ar";
  theme: "dark" | "light";
  onSelectDish: (dish: Dish) => void;
}

export function MenuPage({ language, theme, onSelectDish }: MenuPageProps) {
  const isRTL = language === "ar";

  const menuData = {
    pizza: {
      title: { en: "Artisan Pizzas", ar: "البيتزا الفاخرة" },
      dishes: [
        {
          id: "pizza-1",
          name: { en: "Truffle Mushroom", ar: "الكمأة والفطر" },
          description: { en: "Black truffle, wild mushrooms, aged parmesan", ar: "كمأة سوداء، فطر بري، بارميزان معتق" },
          price: "$28",
          image: "https://images.unsplash.com/photo-1762631176795-d500f0472051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pizza-2",
          name: { en: "Margherita Royale", ar: "مارغريتا الملكية" },
          description: { en: "San Marzano tomatoes, buffalo mozzarella, fresh basil", ar: "طماطم سان مارزانو، موزاريلا الجاموس، ريحان طازج" },
          price: "$22",
          image: "https://images.unsplash.com/photo-1734215816956-2fa6c30b8d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pizza-3",
          name: { en: "Quattro Formaggi", ar: "أربعة أجبان" },
          description: { en: "Gorgonzola, fontina, parmesan, mozzarella", ar: "جورجونزولا، فونتينا، بارميزان، موزاريلا" },
          price: "$26",
          image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pizza-4",
          name: { en: "Prosciutto e Rucola", ar: "بروشوتو وجرجير" },
          description: { en: "Parma ham, arugula, cherry tomatoes, shaved parmesan", ar: "لحم بارما، جرجير، طماطم كرزية، بارميزان مبشور" },
          price: "$30",
          image: "https://images.unsplash.com/photo-1605027340585-59e57bef7587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pizza-5",
          name: { en: "Spicy Diavola", ar: "ديافولا الحارة" },
          description: { en: "Spicy salami, jalapeños, chili oil, mozzarella", ar: "سلامي حار، هالبينو، زيت فلفل حار، موزاريلا" },
          price: "$25",
          image: "https://images.unsplash.com/photo-1669658852556-12bf6d724549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pizza-6",
          name: { en: "Seafood Supreme", ar: "ثمار البحر الفاخرة" },
          description: { en: "Shrimp, calamari, mussels, garlic white sauce", ar: "جمبري، كاليماري، بلح البحر، صلصة الثوم البيضاء" },
          price: "$34",
          image: "https://images.unsplash.com/photo-1762631176795-d500f0472051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
      ],
    },
    pasta: {
      title: { en: "Handcrafted Pasta", ar: "المعكرونة الحرفية" },
      dishes: [
        {
          id: "pasta-1",
          name: { en: "Lobster Linguine", ar: "لينغويني الكركند" },
          description: { en: "Fresh lobster, cherry tomatoes, white wine sauce", ar: "كركند طازج، طماطم كرزية، صلصة النبيذ الأبيض" },
          price: "$42",
          image: "https://images.unsplash.com/photo-1727355819370-5646696bf71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pasta-2",
          name: { en: "Truffle Carbonara", ar: "كاربونارا الكمأة" },
          description: { en: "Black truffle, guanciale, pecorino romano, organic eggs", ar: "كمأة سوداء، جوانشيالي، بيكورينو رومانو، بيض عضوي" },
          price: "$38",
          image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pasta-3",
          name: { en: "Squid Ink Fettuccine", ar: "فيتوتشيني حبر الحبار" },
          description: { en: "Fresh squid, garlic, chili, lemon zest", ar: "حبار طازج، ثوم، فلفل حار، قشر ليمون" },
          price: "$34",
          image: "https://images.unsplash.com/photo-1665233273469-4abcf32c5be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pasta-4",
          name: { en: "Pesto Genovese", ar: "بيستو جينوفيزي" },
          description: { en: "Fresh basil pesto, pine nuts, green beans, potatoes", ar: "بيستو الريحان الطازج، صنوبر، فاصوليا خضراء، بطاطس" },
          price: "$28",
          image: "https://images.unsplash.com/photo-1771360873707-f435ef9732ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pasta-5",
          name: { en: "Amatriciana Classica", ar: "أماتريتشانا كلاسيكية" },
          description: { en: "Guanciale, San Marzano tomatoes, pecorino, black pepper", ar: "جوانشيالي، طماطم سان مارزانو، بيكورينو، فلفل أسود" },
          price: "$32",
          image: "https://images.unsplash.com/photo-1761315601031-f31099c14dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "pasta-6",
          name: { en: "Seafood Frutti di Mare", ar: "فروتي دي ماري بحرية" },
          description: { en: "Mixed seafood, white wine, garlic, fresh parsley", ar: "مأكولات بحرية مشكلة، نبيذ أبيض، ثوم، بقدونس طازج" },
          price: "$40",
          image: "https://images.unsplash.com/photo-1727355819370-5646696bf71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
      ],
    },
    burgers: {
      title: { en: "Gourmet Burgers", ar: "البرغر الفاخر" },
      dishes: [
        {
          id: "burger-1",
          name: { en: "Wagyu Deluxe", ar: "واغيو ديلوكس" },
          description: { en: "Wagyu beef, caramelized onions, truffle aioli, aged cheddar", ar: "لحم واغيو، بصل مكرمل، مايونيز الكمأة، شيدر معتق" },
          price: "$36",
          image: "https://images.unsplash.com/photo-1761315413686-8467379d8715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "burger-2",
          name: { en: "Classic Noir", ar: "نوار الكلاسيكي" },
          description: { en: "Prime beef, lettuce, tomato, special sauce, brioche bun", ar: "لحم بقري ممتاز، خس، طماطم، صلصة خاصة، خبز بريوش" },
          price: "$24",
          image: "https://images.unsplash.com/photo-1687764628150-1dc8afa7ba52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "burger-3",
          name: { en: "Smoked BBQ", ar: "باربكيو المدخن" },
          description: { en: "Smoked brisket, BBQ sauce, crispy onions, pickles", ar: "صدر مدخن، صلصة باربكيو، بصل مقرمش، مخلل" },
          price: "$28",
          image: "https://images.unsplash.com/photo-1585238341710-4d3ff484184d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "burger-4",
          name: { en: "Blue Cheese Bacon", ar: "الجبن الأزرق واللحم المقدد" },
          description: { en: "Angus beef, blue cheese, crispy bacon, arugula, balsamic glaze", ar: "لحم أنجوس، جبن أزرق، لحم مقدد مقرمش، جرجير، صلصة بلسمك" },
          price: "$30",
          image: "https://images.unsplash.com/photo-1607730127050-e32a8c756fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "burger-5",
          name: { en: "Mushroom Swiss", ar: "الفطر والجبن السويسري" },
          description: { en: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli", ar: "قرص لحم بقري، فطر مقلي، جبن سويسري، مايونيز الثوم" },
          price: "$26",
          image: "https://images.unsplash.com/photo-1761315413686-8467379d8715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
      ],
    },
    mains: {
      title: { en: "Main Courses", ar: "الأطباق الرئيسية" },
      dishes: [
        {
          id: "main-1",
          name: { en: "Dry-Aged Ribeye", ar: "ريب آي المعتق" },
          description: { en: "28-day aged ribeye, herb butter, seasonal vegetables", ar: "ريب آي معتق 28 يوم، زبدة الأعشاب، خضار موسمية" },
          price: "$58",
          image: "https://images.unsplash.com/photo-1671522636018-485ef1f7cd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "main-2",
          name: { en: "Glazed Short Ribs", ar: "ضلوع القصيرة المزججة" },
          description: { en: "Slow-cooked beef ribs, sesame glaze, fresh dill", ar: "ضلوع بقري مطهوة ببطء، صلصة السمسم، شبت طازج" },
          price: "$48",
          image: "https://images.unsplash.com/photo-1761315412952-a3a9e3ed06ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "main-3",
          name: { en: "Pan-Seared Salmon", ar: "سلمون محمص" },
          description: { en: "Atlantic salmon, lemon butter, asparagus, microgreens", ar: "سلمون أطلسي، زبدة الليمون، هليون، خضراوات صغيرة" },
          price: "$44",
          image: "https://images.unsplash.com/photo-1625604086816-4bfaf603e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "main-4",
          name: { en: "Lamb Chops Provençal", ar: "أضلاع خروف بروفنسال" },
          description: { en: "Herb-crusted lamb chops, ratatouille, red wine reduction", ar: "أضلاع خروف بقشرة الأعشاب، راتاتوي، صلصة النبيذ الأحمر" },
          price: "$52",
          image: "https://images.unsplash.com/photo-1671522636018-485ef1f7cd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "main-5",
          name: { en: "Duck Confit", ar: "بط كونفيت" },
          description: { en: "Slow-cooked duck leg, orange glaze, roasted root vegetables", ar: "ساق بط مطهو ببطء، صلصة البرتقال، خضار جذرية محمصة" },
          price: "$46",
          image: "https://images.unsplash.com/photo-1590741664176-7fbd7e2592a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "main-6",
          name: { en: "Grilled Sea Bass", ar: "قاروص مشوي" },
          description: { en: "Whole sea bass, Mediterranean herbs, lemon, olive oil", ar: "قاروص كامل، أعشاب البحر المتوسط، ليمون، زيت زيتون" },
          price: "$50",
          image: "https://images.unsplash.com/photo-1625604086816-4bfaf603e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
      ],
    },
    sandwiches: {
      title: { en: "Signature Sandwiches", ar: "السندويشات المميزة" },
      dishes: [
        {
          id: "sand-1",
          name: { en: "Pulled Pork Cuban", ar: "كوبي لحم مشدود" },
          description: { en: "Slow-roasted pork, ham, pickles, mustard, pressed bread", ar: "لحم خنزير مشوي ببطء، مخلل، خردل، خبز مكبوس" },
          price: "$18",
          image: "https://images.unsplash.com/photo-1549831933-17b6be99565e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "sand-2",
          name: { en: "Caprese Deluxe", ar: "كابريزي ديلوكس" },
          description: { en: "Fresh mozzarella, heirloom tomatoes, basil pesto, ciabatta", ar: "موزاريلا طازجة، طماطم تراثية، بيستو الريحان، خبز تشياباتا" },
          price: "$16",
          image: "https://images.unsplash.com/photo-1587015566802-5dc157c901cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "sand-3",
          name: { en: "Grilled Chicken Club", ar: "نادي الدجاج المشوي" },
          description: { en: "Grilled chicken breast, bacon, avocado, chipotle mayo", ar: "صدر دجاج مشوي، لحم مقدد، أفوكادو، مايونيز تشيبوتلي" },
          price: "$20",
          image: "https://images.unsplash.com/photo-1609670441507-478e600fbeb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "sand-4",
          name: { en: "Steak & Cheese Philly", ar: "فيلي ستيك وجبن" },
          description: { en: "Ribeye steak, sautéed peppers, onions, provolone, hoagie roll", ar: "ستيك ريب آي، فلفل مقلي، بصل، بروفولون، خبز هوجي" },
          price: "$22",
          image: "https://images.unsplash.com/photo-1583352367947-0bcebd549ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
          id: "sand-5",
          name: { en: "Smoked Turkey Avocado", ar: "ديك رومي مدخن وأفوكادو" },
          description: { en: "Smoked turkey, avocado, spinach, cranberry aioli, multigrain", ar: "ديك رومي مدخن، أفوكادو، سبانخ، مايونيز التوت البري، خبز حبوب كاملة" },
          price: "$17",
          image: "https://images.unsplash.com/photo-1569622362413-789f23f181d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
      ],
    },
  };

  const translations = {
    title: { en: "Our Menu", ar: "قائمتنا" },
    subtitle: { en: "Crafted with passion, served with elegance", ar: "صُنعت بشغف، تُقدم بأناقة" },
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`min-h-screen pt-24 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1
            className="text-6xl md:text-8xl font-bold mb-4"
            style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
          >
            {translations.title[language]}
          </h1>
          <p
            className={`text-xl ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
            style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
          >
            {translations.subtitle[language]}
          </p>
        </motion.div>

        {Object.entries(menuData).map(([key, category], categoryIndex) => (
          <CategorySection
            key={key}
            category={category}
            language={language}
            theme={theme}
            isRTL={isRTL}
            onSelectDish={onSelectDish}
            index={categoryIndex}
          />
        ))}
      </div>
    </div>
  );
}

function CategorySection({
  category,
  language,
  theme,
  isRTL,
  onSelectDish,
  index,
}: {
  category: { title: { en: string; ar: string }; dishes: Dish[] };
  language: "en" | "ar";
  theme: "dark" | "light";
  isRTL: boolean;
  onSelectDish: (dish: Dish) => void;
  index: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-32"
    >
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
        >
          {category.title[language]}
        </h2>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className={`p-3 rounded-full ${
              theme === "dark"
                ? "bg-zinc-800 hover:bg-zinc-700"
                : "bg-zinc-100 hover:bg-zinc-200"
            }`}
          >
            <ChevronLeft className={theme === "dark" ? "text-white" : "text-black"} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className={`p-3 rounded-full ${
              theme === "dark"
                ? "bg-zinc-800 hover:bg-zinc-700"
                : "bg-zinc-100 hover:bg-zinc-200"
            }`}
          >
            <ChevronRight className={theme === "dark" ? "text-white" : "text-black"} />
          </motion.button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {category.dishes.map((dish, dishIndex) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: dishIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelectDish(dish)}
            className="flex-shrink-0 w-96 cursor-pointer group"
          >
            <div className="relative h-80 overflow-hidden rounded-2xl mb-4">
              <ImageWithFallback
                src={dish.image}
                alt={dish.name[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/40" : "bg-white/40"} group-hover:bg-black/60 transition-colors`} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-amber-500 text-2xl font-bold mb-1">{dish.price}</p>
              </div>
            </div>

            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: isRTL ? 'Cairo' : 'Playfair Display' }}
            >
              {dish.name[language]}
            </h3>
            <p
              className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
              style={{ fontFamily: isRTL ? 'Tajawal' : 'Poppins' }}
            >
              {dish.description[language]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
