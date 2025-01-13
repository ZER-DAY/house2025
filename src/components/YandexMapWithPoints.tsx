import React from "react";

const YandexMap: React.FC = () => {
  return (
    <section className="yandex-map py-12 bg-gray-100" id="yandex-map-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title  text-4xl  tracking-wide text-gray-800 mb-8">
          География работ
        </h2>
        <div className="yandex-map__content relative bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=44.516931%2C48.707103&z=12&l=map&pt=44.516931,48.707103,pm2rdl~44.512345,48.701234,pm2rdl~44.520456,48.715678,pm2rdl"
            title="Yandex Map"
            className="w-full h-[500px] rounded-md border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
