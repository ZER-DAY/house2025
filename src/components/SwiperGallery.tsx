"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

export default function SwiperGallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // To track the selected image

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full max-w-[450px] p-4 mx-auto">
      {/* Main Image Gallery */}
      <div className="relative">
        <Swiper
          loop={true}
          navigation={true} // Enables Swiper's built-in navigation buttons
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

        {/* Swiper Navigation Buttons */}
      </div>

      {/* Thumbnail Images */}
      <div className="hidden sm:grid grid-cols-2 gap-4 w-full max-w-[500px] mx-auto">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden shadow-md cursor-pointer"
            onClick={() => handleThumbnailClick(image)} // Set the selected image on click
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={500}
              height={400}
              quality={90}
              className="w-full h-full object-cover border border-gray-300 hover:border-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the larger image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected large view"
              width={800}
              height={600}
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-600"
              onClick={closeModal} // Close the modal
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
