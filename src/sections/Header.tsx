"use client";
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* الشريط العلوي */}
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* الشريط الرئيسي */}
      <div className="py-3 bg-stone-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* الشعار */}
            <Link href="/">
              <Image
                src={Logo}
                alt="Saas Logo"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </Link>

            {/* زر القائمة (الهامبورغر) للشاشات الصغيرة */}
            <div className="md:hidden">
              {isMenuOpen ? (
                <XMarkIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <Bars3Icon
                  className="h-6 w-6 text-black cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>

            {/* شريط التنقل */}
            <nav
              className={`${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 fixed md:static top-0 left-0 w-3/4 md:w-auto h-full md:h-auto bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none transition-transform duration-300 ease-in-out z-40 md:flex flex-col md:flex-row gap-6 text-black/60 items-center`}
            >
              <ul className="flex flex-col md:flex-row gap-6 md:gap-4">
                <li onClick={closeMenu}>
                  <Link
                    href="/"
                    className="hover:text-black transition-all font-medium text-lg"
                  >
                    Главная
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link
                    href="/categories/barnhausy"
                    className="hover:text-black transition-all text-lg"
                  >
                    Барнхаусы
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link
                    href="/categories/fakhwerki"
                    className="hover:text-black transition-all text-lg"
                  >
                    Фахверки
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link
                    href="/categories/bani"
                    className="hover:text-black transition-all text-lg"
                  >
                    Бани
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link
                    href="/contact"
                    className="hover:text-black transition-all text-lg"
                  >
                    О компании
                  </Link>
                </li>
              </ul>

              {/* أزرار التطبيقات */}
              <div className="flex flex-col md:flex-row gap-3 mt-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300"
                  onClick={closeMenu}
                >
                  <FaTelegramPlane className="text-xl" />
                  Telegram
                </a>
                <a
                  href="https://wa.me/+79380080691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300"
                  onClick={closeMenu}
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
              </div>
            </nav>

            {/* تراكب الشاشة عند فتح القائمة */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={closeMenu}
              ></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
