import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {/* الصفحة الرئيسية */}
          <Link
            href="/"
            className="hover:text-white transition-all font-medium"
          >
            Главная
          </Link>

          {/* الروابط الأخرى */}
          <Link
            href="/categories/barnhausy"
            className="hover:text-white transition-all"
          >
            Барнхаусы
          </Link>
          <Link
            href="/categories/fakhwerki"
            className="hover:text-white transition-all"
          >
            Фахверки
          </Link>
          <Link
            href="/categories/bani"
            className="hover:text-white transition-all"
          >
            Бани
          </Link>

          <Link href="/contact" className="hover:text-white transition-all">
            О компании
          </Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
