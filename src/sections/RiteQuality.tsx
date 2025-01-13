import React from "react";

const RiteQuality: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Card Container */}
        <div
          className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden max-w-screen-xl mx-auto"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative grid lg:grid-cols-2 p-8 lg:p-12 text-white">
            {/* Left Section: Video Button */}
            <div className="flex flex-col items-start justify-center">
              <div className="relative group w-fit">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Видеообзор дома</span>
                </div>
                <a href="" rel="lightbox" className="absolute inset-0"></a>
              </div>
            </div>

            {/* Right Section: Text and Button */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="uppercase tracking-wider text-sm font-medium text-gray-300">
                Проживание в демонстрационном доме перед заключением договора
              </div>
              <h1 className="text-4xl font-extrabold">
                Уникальная возможность оценить преимущества каркасного дома
              </h1>
              <p className="text-lg leading-relaxed text-gray-200">
                Временное проживание в барнхаусе со всеми удобствами - это
                возможность погрузиться в атмосферу собственного будущего дома.
                Прочувствуйте каждую деталь перед тем, как принять решение о
                строительстве.
              </p>
              <button
                className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
                data-modal="cb-form-1"
                data-title="Оставьте Ваши контакты,"
                data-subtitle="Мы перезвоним, чтобы уточнить несколько вопросов и забронировать для вас проживание в нашем демонстрационном барнхаусе"
                data-form-subject="Сканди ЭкоДом | Форма :: Запрос полной сметы в комплектации «Теплый контур». Кнопка :: Отправить."
                data-form-ya-metrix-id="51994721"
                data-form-ya-metrix-name="zayavka"
              >
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiteQuality;
