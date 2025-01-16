"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "",
      position: "основатель компании",
      image: "/haje.png",
    },
    {
      name: "Диана",
      position: "менеджер по продажам",
      image: "/manger.jpg",
    },
    {
      name: "ИВАН ИВАНОВ",
      position: "Главный архитектор проектов",
      image: "/avan.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            <span className="italic">Коротко</span> о компании:
          </h1>
        </div>

        {/* الشبكة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-10">
          {/* العمود الأول */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Мы строим дома и сооружения из{" "}
                <b className="italic text-blue-600">
                  экологически чистой древесины
                </b>{" "}
                для обработки которой используются только натуральные вещества,
                такие, как воск, масло и доску{" "}
                <b className="italic text-blue-600">
                  камерной сушки высшего сорта
                </b>
                . За девять лет работы мы приобрели значительный опыт в
                строительстве и применении современных технологий при возведении
                каркасных домов и сооружений. И с радостью делимся этим опытом с
                Вами.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-medium text-gray-800">
                От 100 000 руб
              </h3>
              <p className="text-gray-600">
                Со сметы, в среднем, мы экономим для Вас за счет опыта и
                дилерских скидок.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Вторым приоритетом после качества работ для нас является
                скорость. <br />
                <b className="italic text-blue-600">
                  95% работ мы выполняем в заявленный срок
                </b>
                , так как рассчитываем время постройки исходя из большого опыта
                в строительстве и отлаженному производственному процессу.
              </p>
            </div>
          </div>

          {/* العمود الأوسط */}
          <div>
            {/* النص العلوي */}
            <div className="bg-white p-6 rounded shadow mb-6">
              <h3 className="text-xl font-medium">с 2010 года</h3>
              <p className="text-gray-600">
                Мы занимаемся загородным строительством. За 13 лет мы выросли с
                1 строительной бригады до 25 бригад в штате.
              </p>
            </div>

            {/* السلايدر للصور */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    {/* الصورة الدائرية */}
                    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg mx-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover" // الصورة تملأ الحاوية بالكامل
                      />
                    </div>

                    {/* النصوص أسفل الصورة */}
                    <div className="w-80 bg-blue-600 bg-opacity-90 text-white text-center py-4 mt-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      <p className="text-sm">{member.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* النص السفلي */}
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-xl font-medium">100% контроль качества</h3>
              <p className="text-gray-600">
                В нашей компании несколько этапов контроля качества. Прораб
                производит поэтапный прием работ по чек-листу. Ведется
                видеонаблюдение, составляются фотоотчеты.
              </p>
            </div>
          </div>

          {/* العمود الثالث */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Сплоченная команда профессионалов, работающих на постоянной
                основе. Наши специалисты способны воплотить в жизнь любые ваши
                мечты о собственном деревянном доме или любой другой постройке.
                На данный момент{" "}
                <b className="italic text-blue-600">
                  в штате 25 бригад, каждая из них строит до 3 домов в год
                </b>
                .
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-medium text-right">45 домов в год</h3>
              <p className="text-gray-600 text-right">
                В среднем мы строим в Волгограде, Волгорадской Области и
                оставшей части ЮФО
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Мы, как основатели компании изначально строили каркасные дома
                своими руками.{" "}
                <b className="italic text-blue-600">
                  Создание каждого проекта и постройка дома осуществляются «как
                  для себя».
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
