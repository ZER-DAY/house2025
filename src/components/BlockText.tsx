export default function BlockText() {
  return (
    <div className="block-text block-padding bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* الإطار الخارجي */}
        <div className="border border-gray-300 rounded-lg shadow-lg bg-white p-6">
          {/* الإطار الداخلي */}
          <div className="border border-gray-200 rounded-md p-4">
            <div className="text-in bt14 space-y-6 text-gray-800">
              <p>
                Строительство каркасных домов для постоянного проживания —
                основная деятельность компании Сканди ЭкоДом с 2010 года. В
                штате компании 15 строительных бригад, 95% заказов сданы в срок.
                Компания является аккредитованным застройщиком, мы работаем со
                льготной ипотекой Сбербанка, Сельской ипотекой от
                Россельхозбанка, с материнским капиталом. Мы осуществляем
                строительство в Ленинградской, Московской и Новгородской
                областях.
              </p>
              <h2 className="text-2xl font-bold">
                Преимущества сотрудничества
              </h2>
              <p>
                Каркасные дома для круглогодичного проживания от Сканди ЭкоДом
                имеют множество преимуществ, но приведем главные:
              </p>
              <h3 className="text-xl font-semibold">
                Более 100 проектов каркасных домов на выбор
              </h3>
              <p>
                Мы предлагаем большой выбор готовых проектов домов различной
                площади, этажности и дизайна. Наши архитекторы изменят любой
                существующий проект под ваши вкусы, либо создадут новый проект.
              </p>
              <h3 className="text-xl font-semibold">
                3 варианта строительства
              </h3>
              <p>
                Сканди ЭкоДом предлагает своим клиентам 3 варианта комплектации
                домов:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  каркас дома с внешней отделкой. Этот вариант отлично подходит
                  для тех, кто хочет строить дом поэтапно, так как строительство
                  дома можно приостановить на любое время, это самый недорогой
                  вариант.
                </li>
                <li>
                  каркас с утеплением, коммуникациями и внешней отделкой. Такой
                  вариант идеально подходит для тех, кто хочет сделать
                  внутреннюю отделку дома самостоятельно.
                </li>
                <li>
                  каркасный дом под ключ. Всю работу по строительству и
                  внутренней отделке дома мы возьмем на себя, вам останется
                  только переехать в готовый дом.
                </li>
              </ul>
              <h3 className="text-xl font-semibold">
                Выбор фундамента и материалов для отделки
              </h3>
              <p>
                Перед составлением сметы наши специалисты проанализируют участок
                застройки и помогут определить какой фундамент подойдет в
                качества долговечного основания дома. На этапе проектирования
                архитектор, дизайнер и клиент вместе выбирают материал кровли,
                внешней и внутренней отделки, расположение и размер окон и
                дверей.
              </p>
              <h3 className="text-xl font-semibold">
                Скорость и доступная стоимость
              </h3>
              <p>
                Начать строить дом для постоянного проживания по каркасной
                технологии можно в любое время года, при этом строительство 2-х
                этажного жилья может занять всего 90 дней.
              </p>
              <h4 className="text-lg font-semibold">
                Цены на каркасные дома для постоянного проживания
              </h4>
              <p>Стоимость любой постройки зависит от:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Этажности дома.</li>
                <li>Площади.</li>
                <li>Фундамента.</li>
                <li>используемых строительных материалов.</li>
              </ul>
              <p>
                Поэтому посчитать окончательную цену строительства дома под
                постоянное проживание самостоятельно довольно сложно. Запишитесь
                на консультацию в компанию Сканди ЭкоДом и наши специалисты
                сделают вам предварительный расчет стоимости. Следует отметить,
                что окончательная цена строительства фиксируется в контракте и
                не изменится после заключения договора.
              </p>
              <p>
                Наша компания сотрудничает с поставщиками и производителями
                строительных материалов, поэтому экономит своим клиентам до
                200000 рублей на каждом проекте за счет дилерских скидок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
