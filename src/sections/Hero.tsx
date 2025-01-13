"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Array of backgrounds
  const backgrounds = [
    "/background3.png",
    "/background1.png",
    "/background21.png",
  ];

  // Array of durations for each background (in milliseconds)
  const durations = [10000, 10000, 10000]; // 15 seconds for the first, 10 seconds for the others

  // State to track the current background and its duration
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    // Set timeout for the current background
    const timeout = setTimeout(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, durations[currentBackground]);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [currentBackground, durations]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-cover bg-center overflow-x-clip transition-all duration-1000"
      style={{
        backgroundImage: `url('${backgrounds[currentBackground]}')`,
      }}
    >
      <div className="container">
        <div className="md:flex items-center relative">
          <div className="md:w-[478px]">
            <div className="tag ">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white/100 to-[#6e6a6a] text-transparent bg-clip-text mt-6">
              СОВРЕМЕННЫЕ КАРКАСНЫЕ ДОМА
            </h1>
            <p className="text-2xl bg-gradient-to-b from-white/100 to-[#6e6a6a] text-transparent bg-clip-text tracking-tight mt-6 font-bold">
              ПОСТОЯННОГО ПРОЖИВАНИЯ ПО СКАНДИНАВСКИМ ТЕХНОЛОГИЯМ «ПОД КЛЮЧ» ОТ
              <span className="text-white font-bold tracking-tighter mx-2">
                2 130 690 РУБЛЕЙ
              </span>
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">начинаем </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* Add animations or additional images here */}
          </div>
        </div>
      </div>
    </section>
  );
};
