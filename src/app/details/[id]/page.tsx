import { notFound } from "next/navigation";
import houseDetails from "@/data/houses";
import FloorPlans from "@/components/FloorPlans"; // Component for Floor Plans
import SwiperGallery from "@/components/SwiperGallery";
import ReviewsSection from "@/components/ReviewsSection";
import YandexMapWithPoints from "@/components/YandexMapWithPoints";

export async function generateStaticParams() {
  return Object.keys(houseDetails).map((id) => ({ id }));
}

export default function Details({ params }: { params: { id: string } }) {
  const id = params?.id;
  const house = houseDetails[id];

  // إذا لم يتم العثور على المنزل، يتم عرض صفحة 404
  if (!house) {
    notFound();
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section for image and text */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Image Section */}
          <div className="md:w-1/2">
            {house.images && house.images.length > 0 ? (
              <SwiperGallery images={house.images} />
            ) : (
              <p className="text-gray-500">لا توجد صور متاحة لهذا المنزل.</p>
            )}
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col text-left">
            <h1 className="text-2xl font-bold mb-4 text-black">
              {house.title || "عنوان غير متوفر"}
            </h1>
            <p className="text-gray-600 mb-4">
              {house.description || "الوصف غير متوفر"}
            </p>

            {/* House Details */}
            <div className="bg-[#F7F7F7] text-[#191919] font-sans p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Детали дома
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p className="text-sm">
                  <strong>Размер: </strong>
                  {house.specs?.size || "غير متوفر"}
                </p>
                <p className="text-sm">
                  <strong>Площадь: </strong>
                  {house.specs?.area || "غير متوفر"}
                </p>
                <p className="text-sm">
                  <strong>Тип дома: </strong>
                  {house.specs?.type || "غير متوفر"}
                </p>
                <p className="text-sm">
                  <strong>Стиль: </strong>
                  {house.specs?.style || "غير متوفر"}
                </p>
                <p className="text-sm md:col-span-2">
                  <strong>Цена под ключ: </strong>
                  {house.specs?.price || "غير متوفر"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans */}
        <div className="p-6 border-t mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Планировка
          </h2>
          <FloorPlans planImages={house.planImages || []} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="pt-32">
        <ReviewsSection />
      </div>

      {/* Yandex Map */}
      <YandexMapWithPoints />
    </div>
  );
}
