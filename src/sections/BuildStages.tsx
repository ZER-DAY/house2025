import Image from "next/image";

const stages = [
  {
    id: 1,
    title: "Выбор проекта",
    description:
      "Вы выбираете проект из каталога или даете нам набор визуализаций или описание будущего дома, по которым мы можем разработать индивидуальный проект.",
    imageSrc: "/find-project.png",
    step: "шаг",
  },
  {
    id: 2,
    title: "Утверждаем комплектацию дома",
    description:
      "Предлагаем на выбор 3 варианта: от здания, строительство которого можно приостановить на неопределенное время, до полностью готового для постоянного проживания коттеджа.",
    imageSrc: "/find-project2.png",
    step: "шаг",
  },
  {
    id: 3,
    title: "Выбираем фундамент",
    description:
      "От фундамента напрямую зависит комфортность и долговечность дома. Выбрать вид фундамента для Вашего дома помогут наши специалисты.",
    imageSrc: "/find-project3.png",
    step: "шаг",
  },
  {
    id: 4,
    title: "Утверждаем материалы и отделку дома",
    description:
      "Определяем количество и вид стройматериалов для каждого элемента дома. Рассчитываем окончательную стоимость и сроки строительства, которые фиксируем в договоре.",
    imageSrc: "/find-project4.png",
    step: "шаг",
  },
  {
    id: 5,
    title: "Строим каркасный дом",
    description:
      "Каркасное строительство не зависит от сезона. Стройку можно начать в любой удобный момент. В процессе работ ведется видеонаблюдение и составляются фотоотчеты.",
    imageSrc: "/find-project5.png",
    step: "шаг",
  },
  {
    id: 6,
    title: "Подключаем инженерию и коммуникации",
    description:
      "При необходимости подберем и установим оборудование для отопления и вентиляция, проведем бурение скважины и обеспечим водоснабжение и канализацию, выполним работы по электрике.",
    imageSrc: "/find-project6.png",
    step: "шаг",
  },
  {
    id: 7,
    title: "Добро пожаловать домой!",
    description:
      "Проводим полный осмотр и фиксируем качество строения, подписываем закрывающие акты, выдаем гарантийные документы и необходимые справки.",
    imageSrc: "/build-stages-bg.png",
    keyImage: "/build-key.png",
    step: "шаг",
  },
];

export default function BuildStages() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Как <span className="text-blue-600">мы</span> работаем
        </h2>

        {/* الصف الأول */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-8 mb-8">
          {stages.slice(0, 4).map((stage) => (
            <div
              key={stage.id}
              className="relative p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-0 hover:opacity-30 transition duration-300 rounded-lg"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-200 flex items-center justify-center overflow-hidden">
                    {stage.imageSrc ? (
                      <Image
                        src={stage.imageSrc}
                        alt={stage.title}
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="absolute top-1/2 right-[-20px] sm:right-[-25px] transform -translate-y-1/2 text-gray-300 font-bold text-4xl sm:text-5xl flex items-center space-x-2">
                    <span>{stage.id}</span>
                    <span className="text-lg text-gray-500">{stage.step}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الصف الثاني */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8">
          {stages.slice(4, 6).map((stage) => (
            <div
              key={stage.id}
              className="relative p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-0 hover:opacity-30 transition duration-300 rounded-lg"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-200 flex items-center justify-center overflow-hidden">
                    {stage.imageSrc ? (
                      <Image
                        src={stage.imageSrc}
                        alt={stage.title}
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="absolute top-1/2 right-[-20px] sm:right-[-25px] transform -translate-y-1/2 text-gray-300 font-bold text-4xl sm:text-5xl flex items-center space-x-2">
                    <span>{stage.id}</span>
                    <span className="text-lg text-gray-500">{stage.step}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* البطاقة الأخيرة */}
          <div className="relative bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-0 hover:opacity-30 transition duration-300 rounded-lg"></div>
            <div className="relative z-10 flex-grow p-6 flex flex-col items-center lg:items-start">
              {stages[6].keyImage ? (
                <Image
                  src={stages[6].keyImage}
                  alt="Key"
                  width={250}
                  height={140}
                  className="mb-4"
                />
              ) : (
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
              <h3 className="font-bold text-base sm:text-lg text-sky-800 mb-2">
                {stages[6].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center lg:text-left leading-relaxed max-w-prose">
                {stages[6].description}
              </p>
            </div>
            <div className="relative w-full">
              {stages[6].imageSrc ? (
                <Image
                  src={stages[6].imageSrc}
                  alt="Home"
                  width={360}
                  height={250}
                  className="rounded-b-lg object-cover w-full ml-40"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 rounded-b-lg">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
