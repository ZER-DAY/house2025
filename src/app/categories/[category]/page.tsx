"use client";

import Card from "@/components/Card";
import houseDetails from "@/data/houses";
import { useRouter } from "next/navigation";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const router = useRouter();

  // تصفية المنازل بناءً على التصنيف
  const filteredHouses = Object.entries(houseDetails).filter(
    ([, house]) => house.slug === category
  );

  // إذا لم يتم العثور على أي منزل مرتبط بهذا التصنيف
  if (filteredHouses.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">
          К сожалению, дома в данной категории отсутствуют
        </h1>
        <p className="text-gray-600 mt-4">
          Попробуйте выбрать другую категорию.
        </p>
      </div>
    );
  }

  return (
    <section
      className="pt-8 pb-20 md:pt-10 md:pb-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      {/* الحاوية الرئيسية */}
      <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden p-6">
        {/* عنوان القسم */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            {category}
          </h1>
          <p className="text-gray-600 mt-2">
            Выберите дом своей мечты из категории{" "}
            <span className="text-blue-500 font-semibold">{category}</span>.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="flex flex-row flex-wrap justify-start gap-6">
          {filteredHouses.map(([id, house]) => (
            <Card
              key={id}
              id={id}
              title={house.title}
              size={`${house.specs.area} м²`}
              price={`${house.specs.price} руб.`}
              imageUrl={house.images[0]}
              label="ВЕНТИЛЯЦИЯ В ПОДАРОК"
              labelColor="bg-[#FFD76F] text-[#1C1C1C]"
              onClick={() => router.push(`/details/${id}`)} // التنقل عند النقر
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
