"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 1,
    initials: "S",
    name: "Stanislava Transgenderevna",
    date: "20 авг. 2024 г.",
    content:
      "Строили дом по проекту КД790 с компанией СкандиЭкоДом. Хочется поделиться впечатлениями...",
    source: "Google",
    rating: 5,
  },
  {
    id: 2,
    initials: "EK",
    name: "Elena K.",
    date: "2 авг. 2024 г.",
    content:
      "Хочу поблагодарить менеджера Светлану за прекрасную работу, а также всю команду...",
    source: "Яндекс",
    rating: 5,
  },
  {
    id: 3,
    initials: "ТМ",
    name: "Ткач Мария",
    date: "6 июл. 2024 г.",
    content:
      "Еще в 2020 появилась идея построить свой дом. Стали потихоньку вникать и вот недавно созрели...",
    source: "Яндекс",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <h2 className="text-3xl font-bold text-center mb-8 flex justify-start items-start space-x-6">
          Отзывы наших заказчиков
        </h2>

        {/* التقييمات مع الشعارات */}
        <div className="flex justify-start items-start space-x-6 mb-6">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
            Все отзывы
          </button>
          <div className="flex space-x-3 items-center">
            {/* شعار Yandex */}
            <div className="flex items-center space-x-2 bg-white px-3 py-1 border rounded-lg">
              <img src="/yandyexicon.ico" alt="Yandex" className="w-5 h-5" />
              <span className="text-lg font-semibold">4.8</span>
            </div>

            {/* شعار Google */}
            <div className="flex items-center space-x-2 bg-white px-3 py-1 border rounded-lg">
              <img src="/map.ico" alt="Google" className="w-5 h-5" />
              <span className="text-lg font-semibold">4.8</span>
            </div>

            {/* شعار مصدر آخر */}
            <div className="flex items-center space-x-2 bg-white px-3 py-1 border rounded-lg">
              <img src="/goog.ico" alt="Review" className="w-5 h-5" />
              <span className="text-lg font-semibold">4.7</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">83 отзыва из 3 источников</p>
        </div>

        {/* Swiper - بطاقات المراجعات */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.content}</p>
                <a
                  href="#"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  Подробнее
                </a>
                <footer className="text-gray-400 text-xs">
                  Отзыв из {review.source}
                </footer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
