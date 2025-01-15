export type HouseDetailsType = {
  [key: string]: {
    title: string;
    description: string;
    images: string[];
    specs: {
      size: string;
      area: string;
      type: string;
      style: string;
      price: string;
      floors: number;
    };
    planImage: string;
    planImages?: string[]; // مصفوفة لصور التخطيط
    category?: string; // التصنيف باللغة الروسية
    slug?: string; // التصنيف باللغة الإنجليزية
    isFeatured?: boolean; // إذا كان المنزل مميزًا
  };
};

const houseDetails: HouseDetailsType = {
  "kd-1350": {
    title: "дома КД-1250",
    description:
      "Угловой каркасный барнхаус, 190 м² Проект каркасного дома КД-1250 представляет собой элегантный и функциональный барнхаус...",
    images: [
      "/barnhausy/1/image_1.png",
      "/barnhausy/1/image_2.png",
      "/barnhausy/1/image_3.png",
      "/barnhausy/1/image_4.png",
    ],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
      floors: 2,
    },
    planImage: "/barnhausy/1/imageb.png",
    planImages: ["/barnhausy/1/plan_1.png", "/barnhausy/1/plan_2.png"], // أضف صور الخطط هنا
    category: "Фахверки",
    slug: "fakhwerki", // أضف التصنيف باللغة الإنجليزية
    isFeatured: true,
  },

  "kd-13350": {
    title: "дома КД-1250",
    description:
      "Угловой каркасный барнхаус, 190 м² Проект каркасного дома КД-1250 представляет собой элегантный и функциональный барнхаус...",
    images: [
      "/barnhausy/1/image_1.png",
      "/barnhausy/1/image_2.png",
      "/barnhausy/1/image_3.png",
      "/barnhausy/1/image_4.png",
    ],
    specs: {
      size: "10.2X15.1 м",
      area: "154.02 м²",
      type: "Современный дом",
      style: "Фахверк",
      price: "от 60 000 руб./м²",
      floors: 2,
    },
    planImage: "/barnhausy/1/imageb.png",
    planImages: ["/barnhausy/1/plan_1.png", "/barnhausy/1/plan_2.png"], // أضف صور الخطط هنا
    category: "Бани",
    slug: "bani", // أضف التصنيف باللغة الإنجليزية
    isFeatured: true,
  },
};

export default houseDetails;
