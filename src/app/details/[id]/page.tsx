import { notFound } from "next/navigation";
import houseDetails from "@/data/houses";
import SwiperGallery from "@/components/SwiperGallery";
import ReviewsSection from "@/components/ReviewsSection";
import YandexMapWithPoints from "@/components/YandexMapWithPoints";

export async function generateStaticParams() {
  return Object.keys(houseDetails).map((id) => ({ id }));
}

export default function Details({ params }: { params: { id: string } }) {
  const id = params?.id;
  const house = houseDetails[id];

  if (!house) {
    notFound();
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* قسم الصور والعنوان والوصف */}
        <div className="flex flex-col md:flex-row p-6 ml-4">
          {/* معرض الصور */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <SwiperGallery images={house.images} />
            </div>
          </div>

          {/* العنوان والوصف + تفاصيل المنزل */}
          <div className="md:w-1/2 flex flex-col justify-center text-left p-6">
            <h1 className="text-2xl font-bold mb-4 -mt-4 text-black">
              {house.title}
            </h1>
            <p className="text-gray-600 mb-4">{house.description}</p>

            <div className="w-full bg-[#F7F7F7] text-[#191919] font-sans p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Детали дома
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p className="text-sm">
                  <strong>Размер: </strong>
                  {house.specs.size}
                </p>
                <p className="text-sm">
                  <strong>Площадь: </strong>
                  {house.specs.area}
                </p>
                <p className="text-sm">
                  <strong>Тип дома: </strong>
                  {house.specs.type}
                </p>
                <p className="text-sm">
                  <strong>Стиль: </strong>
                  {house.specs.style}
                </p>
                <p className="text-sm md:col-span-2">
                  <strong>Цена под ключ: </strong>
                  {house.specs.price}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* عرض خطط المنزل */}
        <div className="p-6 border-t mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Планировка
          </h2>
          <div className="flex flex-row justify-between gap-6">
            {/* خطة الطابق الأول */}
            {house.planImage && (
              <div className="flex-1 flex flex-col items-center">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  Планировка 1 этажа
                </p>
                <img
                  src={house.planImage}
                  alt="Plan 1"
                  className="rounded-lg shadow-md w-full h-[300px] object-cover max-w-[400px]"
                />
              </div>
            )}

            {/* خطة الطابق الثاني */}
            {house.planImage2 && (
              <div className="flex-1 flex flex-col items-center">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  Планировка 2 этажа
                </p>
                <img
                  src={house.planImage2}
                  alt="Plan 2"
                  className="rounded-lg shadow-md w-full h-[300px] object-cover max-w-[400px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-32">
        <ReviewsSection />
      </div>
      <YandexMapWithPoints />
    </div>
  );
}
