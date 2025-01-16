import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 bg-stone-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* الشعار */}
            <Link href="/">
              <Image
                src={Logo}
                alt="Saas Logo"
                height={40}
                width={40}
                className="cursor-pointer"
              />
            </Link>

            {/* شريط التنقل */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {/* الصفحة الرئيسية */}
              <Link
                href="/"
                className="hover:text-black transition-all font-medium"
              >
                Главная
              </Link>

              {/* الروابط الأخرى */}
              <Link
                href="/categories/barnhausy"
                className="hover:text-black transition-all"
              >
                Барнхаусы
              </Link>
              <Link
                href="/categories/fakhwerki"
                className="hover:text-black transition-all"
              >
                Фахверки
              </Link>
              <Link
                href="/categories/bani"
                className="hover:text-black transition-all"
              >
                Бани
              </Link>
              <Link
                href="/"
                className="hover:text-black transition-all"
              >
                Контакты
              </Link>
              <Link href="#" className="hover:text-black transition-all">
                О компании
              </Link>

              {/* زر Telegram */}
              <a
                href="https://t.me/YourTelegramUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300"
              >
                <FaTelegramPlane className="text-xl" />
                Telegram
              </a>

              {/* زر WhatsApp */}
              <a
                href="https://wa.me/1234567890"
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
