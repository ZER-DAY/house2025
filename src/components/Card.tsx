"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  id: string;
  title: string;
  size: string;
  price: string;
  imageUrl: string;
  label?: string;
  labelColor?: string;
  onClick: (id: string) => void; // الحدث يتم تمريره مع الـ id
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  size,
  price,
  imageUrl,
  label,
  labelColor = "bg-[#FFD76F] text-[#1C1C1C]", // لون الافتراضي للـ Label
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)} // استدعاء الحدث عند النقر على البطاقة
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition-transform w-[340px] h-[380px] border"
    >
      <Image
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-[200px]"
        width={546}
        height={384}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
        <div className="text-sm text-gray-600 flex justify-between mb-2">
          <span>📐 {size}</span>
        </div>
        <div className="text-blue-600 font-bold text-xl text-center mb-3">
          💰 {price}
        </div>
        {label && (
          <div
            className={`absolute bottom-2 left-2 px-2 py-1 text-xs font-bold rounded ${labelColor}`}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
