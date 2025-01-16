"use client";

import { useState } from "react";

export default function FloorPlans({ planImages }: { planImages: string[] }) {
  const [selectedPlanImage, setSelectedPlanImage] = useState<string | null>(
    null
  );

  const closeModal = () => {
    setSelectedPlanImage(null);
  };

  return (
    <div>
      <div className="flex flex-row justify-between gap-6 flex-wrap">
        {planImages && planImages.length > 0 ? (
          planImages.map((image, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedPlanImage(image)} // عند الضغط على الصورة، يتم فتح الـ modal
            >
              <p className="text-lg font-medium text-gray-700 mb-4">
                Планировка {index + 1} этажа
              </p>
              <img
                src={image}
                alt={`Plan ${index + 1}`}
                className="rounded-lg shadow-md w-full h-[300px] object-cover max-w-[400px]"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            لا توجد خطط متاحة لهذا المنزل.
          </p>
        )}
      </div>

      {/* Modal for Floor Plan */}
      {selectedPlanImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedPlanImage}
              alt="Floor Plan Large View"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-600"
              onClick={closeModal} // لإغلاق الـ modal
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
