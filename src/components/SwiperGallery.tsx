"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

export default function SwiperGallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    // التحكم في العرض
    <div className=" w-[450px] p-4 mx-auto  ">
      {/* معرض الصور الرئيسي */}
      <div className="relative">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="gallery-top mb-4 w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`House image ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* الصور المصغرة (مخفية على الهواتف) */}
      <div className="hidden sm:grid grid-cols-2 gap-4 w-full max-w-[500px] mx-auto">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="rounded-md overflow-hidden shadow-md">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={500}
              height={400}
              quality={90}
              className="w-full h-full object-cover cursor-pointer border border-gray-300 hover:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
