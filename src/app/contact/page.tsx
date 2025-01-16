// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import About from "@/sections/about";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const offices = [
    {
      city: "Санкт-Петербург",
      address: `Cканди ЭкоДом<br>г. Санкт-Петербург<br>пл. Конституции дом 7 (м. Московская)<br>
        <b>отдел продаж:</b><br>СПб: 332 офис, этаж 3 (БЦ «Лидер»)<br>
        <b>отдел снабжения:</b><br>626 офис, этаж 6 (БЦ «Лидер»)<br>`,
      requisites: `
        ИНН 7842518460 / КПП 781001001 <br>
        Р/с 40702810910000687616<br>
        БИК 044525974
      `,
      mapCoordinates: "59.8510662,30.3081016",
      phone: ["8 (812) 777-00-92", "8 (495) 664-40-26"],
      email: "info@scandiecodom.ru",
      images: [
        "/office-images-1.jpg",
        "/office-images-2.jpg",
        "/office3.jpg",
        "/office2.jpg",
        "/office1.jpg",
      ],
    },
    {
      city: "Москва",
      address: `<b>отдел продаж в Москве: </b><br>SOK Сити Москва, Пресненская набережная, д. 12`,
      requisites: ``,
      mapCoordinates: "55.749625,37.537419",
      phone: ["8 (495) 664-40-26"],
      email: "info@scandiecodom.ru",
      images: [
        "/office-images-3.jpg",
        "/office-images-4.jpg",
        "/office-images-2.jpg",
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/scandiecodom/",
      icon: "/icons/instagram.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/scandieco",
      icon: "/icons/facebook.svg",
    },
    {
      name: "VK",
      href: "https://vk.com/public53658191",
      icon: "/icons/vk.svg",
    },
    {
      name: "Telegram",
      href: "https://t.me/scandiecodom",
      icon: "/icons/telegram.svg",
    },
    {
      name: "WhatsApp",
      href: "https://scandiecodom.ru/whatsapp/",
      icon: "/icons/whatsapp.svg",
    },
  ];

  const currentOffice = offices[activeTab];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Телефоны для связи:
            </h2>
            {currentOffice.phone.map((phone, index) => (
              <p key={index} className="text-blue-600">
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="hover:underline"
                >
                  {phone}
                </a>
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Электронная почта:
            </h2>
            <p className="text-blue-600">
              <a
                href={`mailto:${currentOffice.email}`}
                className="hover:underline"
              >
                {currentOffice.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Адрес офиса:
            </h2>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: currentOffice.address }}
            />
          </div>

          {currentOffice.requisites && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Наши реквизиты:
              </h2>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: currentOffice.requisites }}
              />
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              График работы:
            </h2>
            <p className="text-gray-600">ПН-ПТ — с 09:00 до 18:00</p>
            <p className="text-gray-600">СБ, ВС — по предварит. записи</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Мы в соц. сетях:
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          <div className="flex space-x-4">
            {offices.map((office, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-md border ${
                  activeTab === index
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>

          <iframe
            src={`https://www.google.com/maps?q=${currentOffice.mapCoordinates}&z=14&output=embed`}
            width="100%"
            height="300"
            className="rounded-md border"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="grid grid-cols-3 gap-4">
            {currentOffice.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md border">
                <Image
                  src={image}
                  alt={`Office Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default ContactPage;
