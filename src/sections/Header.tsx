import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"; // أيقونات واتساب وتلقرام

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* الشريط العلوي */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="py-5 bg-stone-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* الشعار */}
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            {/* أيقونة القائمة (للهواتف فقط) */}
            <MenuIcon className="h-5 w-5 md:hidden" />

            {/* شريط التنقل */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="/">Главная</a>
              <a href="#">Каталог проектов</a>
              <a href="#">Барнхаусы</a>
              <a href="#">Фахверки</a>
              <a href="#">Бани</a>
              <a href="#">Портфолио</a>
              <a href="#">Ипотека</a>

              {/* زر Telegram */}
              <a
                href="https://t.me/YourTelegramUsername" // ضع رابط حساب Telegram هنا
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300"
              >
                <FaTelegramPlane className="text-xl" />
                Telegram
              </a>

              {/* زر WhatsApp */}
              <a
                href="https://wa.me/1234567890" // ضع رقم واتساب الخاص بك هنا
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
