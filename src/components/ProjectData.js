const projectData = [
    {
        id: 1,
        name: "Анализ данных",
        showNameOnButton: true,
        category: "Additional Skills",
        importance: "high",
        bgImage: '/images/data.png',
        description: () => (
            <>
                <div className="data-analysis">
                    <div className="data-analysis-image-container">
                        <a
                            href="/papers/GlobalRecipe.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/images/globalrecipe.png"
                                alt="Global Recipe Sentiment Analysis"
                                className="data-analysis-image"
                            />
                            <div className="data-analysis-image-overlay">Анализ настроений по глобальным рецептам/Global Recipe Sentiment Analysis</div>
                        </a>
                    </div>
                    <div className="data-analysis-text">
                        <p>
                            Опыт анализа данных с использованием Python и библиотек, таких как <strong>pandas, </strong>
                            <strong>numpy, </strong> <strong>matplotlib,</strong> и <strong>nltk</strong>.
                            Навыки очистки данных, разведочного анализа, визуализации и статистического анализа.
                        </p>
                        <p>
                            <strong>Выбранный проект: </strong>Проведен анализ настроений на большом наборе данных
                            международных рецептов, собранных из The New York Times. Анализировались эмоциональные реакции
                            на блюда из разных стран на протяжении десятилетий, сравнивались тенденции позитивных и негативных оценок.
                        </p>
                        <p>
                            Применены методы обработки естественного языка в <strong>Jupyter Notebook </strong>
                            для выявления культурных и временных закономерностей в отзывах и комментариях о еде.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 2,
        name: "Java",
        showNameOnButton: false,
        category: "Programming Languages",
        importance: "high",
        bgImage: '/images/java.png',
        description: () => (
            <>
                <p>
                    Обширный опыт разработки на Java для различных приложений и систем.
                    Владение основными концепциями Java, включая принципы ООП, структуры данных, многопоточность
                    и шаблоны проектирования.
                </p>
                <p>
                    Создано несколько приложений с использованием библиотек и фреймворков Java, с акцентом на
                    оптимизацию производительности и чистую архитектуру кода.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Сапер (Spring Boot)",
                skillId: 9
            }
        ]
    },
    {
        id: 3,
        name: "JavaScript",
        showNameOnButton: false,
        category: "Programming Languages",
        importance: "high",
        bgImage: '/images/js.png',
        description: () => (
            <>
                <p>
                    Глубокое знание JavaScript для front-end и back-end разработки.
                    Опыт работы с функциями ES6+, асинхронным программированием и функциональными концепциями.
                </p>
                <p>
                    Разработаны интерактивные веб-приложения с использованием фреймворков, таких как React,
                    для создания отзывчивых интерфейсов с эффективным управлением состоянием.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Визуализация метрик (Вычислительная геометрия)",
                skillId: 8
            },
            {
                label: "Сайт-портфолио (React)",
                skillId: 6
            },
            {
                label: "Игра SHELTER (React Native / Expo)",
                skillId: 7
            },
            {
                label: "Сапер (Spring Boot)",
                skillId: 9
            }
        ]
    },
    {
        id: 4,
        name: "Python",
        showNameOnButton: false,
        category: "Programming Languages",
        importance: "high",
        bgImage: '/images/python.png',
        description: () => (
            <>
                <p>
                    Продвинутые навыки Python в машинном обучении, анализе данных и проектировании алгоритмов.
                    Опыт работы с библиотеками: <strong>Pandas, </strong> <strong>NumPy, </strong>
                    <strong>Matplotlib, </strong> <strong>Seaborn, </strong> <strong>Graphviz, </strong> и
                    <strong> nltk</strong> для обработки, анализа и визуализации сложных наборов данных.
                </p>
                <p>
                    Создание и оценка моделей с использованием <strong>scikit-learn, </strong> <strong>TensorFlow, </strong>
                    и <strong>PyTorch, </strong> с акцентом на методы оптимизации и применение
                    в вычислительной геометрии и задачах классификации.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Анализ настроений по глобальным рецептам/Global Recipe Sentiment Analysis (pandas, numpy, matplotlib, nltk)",
                skillId: 1
            },
            {
                label: "Прогнозирование фишинговых сайтов (TensorFlow)",
                skillId: 10
            },
            {
                label: "Линейная регрессия, деревья решений (scikit-learn)",
                skillId: 14
            }
        ]
    },
    {
        id: 5,
        name: "MATLAB",
        showNameOnButton: true,
        category: "Programming Languages",
        importance: "high",
        bgImage: '/images/matlab.png',
        description: () => (
            <>
                <div className="matlab">
                    <div className="matlab-project-image-container">
                        <a
                            href="/papers/Runge_Kutta_Method.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/papers/rungekutta.jpg"
                                alt="Метод Рунге-Кутты"
                                className="matlab-project-image"
                            />
                            <div className="matlab-image-overlay">Метод Рунге-Кутты</div>
                        </a>
                    </div>
                    <div className="matlab-text">
                        <p>
                            Обширный опыт работы с MATLAB, особенно в контексте линейной алгебры и обыкновенных дифференциальных уравнений (ОДУ).
                            Знакомство с решением больших систем линейных уравнений, выполнением LU и QR разложений, вычислением собственных значений и векторов,
                            и анализом устойчивости матриц. В ОДУ опыт включает как аналитические, так и численные методы,
                            такие как метод Эйлера, методы Рунге-Кутты и фазовый анализ.
                        </p>
                        <p>
                            Также есть навыки использования MATLAB для визуализации данных, моделирования математических моделей и прототипирования алгоритмов
                            для математического анализа и инженерных задач.
                        </p>
                        <p>
                            <strong>Выбранный проект:</strong> Написан отчет, описывающий классический метод Рунге-Кутты 4-го порядка
                            для решения задач с начальными условиями в ОДУ. Метод реализован в MATLAB, результаты проверены с известными
                            аналитическими решениями, и визуализировано поведение ошибки при различных шагах. Проект подчеркивает как
                            теоретические основы, так и практическую реализацию.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 6,
        name: "React",
        showNameOnButton: true,
        category: "Frameworks & Libraries",
        importance: "high",
        bgImage: '/images/react.png',
        description: () => (
            <>
                <div className="portfolio">
                    <div className="portfolio-image-container">
                        <a
                            href="https://olgagol.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-image-link "
                        >
                            <img
                                src="/images/portfolio-preview.png"
                                alt="Превью сайта-портфолио"
                                className="portfolio-image"
                            />
                            <div className="portfolio-image-overlay">Это портфолио построено на React - просмотреть главную страницу</div>
                        </a>
                    </div>
                    <div className="portfolio-text">
                        <p>
                            Создание современных веб-приложений с использованием React, с акцентом на структуру компонентов, хуки,
                            контекст и эффективное управление состоянием.
                        </p>
                        <p>
                            Разработаны адаптивные, интерактивные интерфейсы с приоритетом на переиспользуемые компоненты и плавный рендеринг.
                        </p>
                        <p>
                            <strong>Выбранный проект:</strong> Этот сайт-портфолио, полностью построенный на React с индивидуальной системой дизайна
                            и адаптивным макетом на чистом CSS.
                        </p>
                        <a
                            href="https://github.com/Olga-Gol/Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: 'bold' }}
                        >
                            Посмотреть проект на GitHub
                        </a>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 7,
        name: "React Native/Expo",
        showNameOnButton: false,
        category: "Frameworks & Libraries",
        importance: "high",
        videoOrientation: "vertical",
        videos: [
            "/videos/ShelterGameplay.webm"
        ],
        bgImage: '/images/expo.png',
        description: () => (
            <>
                <p>
                    SHELTER - это мобильная адаптация настольной стратегической игры, где игроки получают случайный набор карт,
                    представляющих характеристики, такие как пол, возраст и профессия. Цель - убедить других, что атрибуты вашего персонажа
                    повышают шансы на выживание в условиях бункера.
                </p>
                <p>
                    Мой первый опыт iOS-разработки, построенный на React Native и Expo. Хотя в основном ориентирован на фронтенд, я использовал Node.js
                    для прототипирования API (например, получение данных карт). Финальное приложение работает
                    оффлайн, но эксперименты с Node помогли понять полный стек разработки.
                </p>
                <h4>Примененные технические навыки:</h4>
                <ul className="shelter">
                    <li><strong>React Native:</strong> Построен весь интерфейс с анимациями, touch-взаимодействиями и
                        управлением состоянием для оффлайн-работы (хуки).</li>
                    <li><strong>Expo:</strong> Упрощение сборок без нативного кода для этого JS-проекта.</li>
                    <li><strong>Node.js:</strong> Прототипирование API на ранних этапах разработки для тестирования потоков данных.</li>
                </ul>
                <a
                    href="https://github.com/Olga-Gol/ShelterGame"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Посмотреть проект на GitHub
                </a>
            </>
        ),
    },
    {
        id: 8,
        name: "Вычислительная геометрия",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        videos: [
            "/videos/hilbert1.webm",
            "/videos/hilbert2.webm",
            "/videos/hilbert3.webm"
        ],
        bgImage: '/images/compgeo.png',
        description: () => (
            <div>
                <p>
                    Проведены передовые исследования в области вычислительной геометрии в рамках программы REU по
                    Комбинаторике, Алгоритмам и ИИ для реальных задач в Университете Мэриленда.
                    Основное внимание уделено теоретическим проблемам в метрическом пространстве Гильберта, включая
                    задачу минимальной ограничивающей сферы (MEB).
                </p>
                <p>
                    Доказано, что минимальные радиусы сфер в метрических пространствах со свойством Гейне-Бореля являются
                    задачами типа LP, и разработаны геометрические примитивы для вычисления таких сфер в геометрии Гильберта.
                    Продемонстрированы свойства расширения в слабых метрических пространствах и создан инструмент для динамической
                    визуализации выпуклых полигональных областей.
                </p>
                <p>
                    Совместно разработано интерактивное приложение на JavaScript для визуализации и манипуляции
                    сферами Функа, обратного Функа и Томпсона в выпуклых множествах. Инструмент доступен по адресу{" "}
                    <a
                        href="https://funk-geo-visualizer.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        funk-geo-visualizer.vercel.app
                    </a>. Код доступен на{" "}
                    <a
                        href="https://github.com/nithin1527/funk-geo-visualizer?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 9,
        name: "Spring",
        showNameOnButton: false,
        category: "Frameworks & Libraries",
        importance: "high",
        videos: [
            "/videos/minesweeper.webm"
        ],
        bgImage: '/images/spring.png',
        description: () => (
            <>
                <div>
                    <p>
                        Создана полноценная <strong>игра в стиле Сапера</strong> с использованием
                        <strong> Java</strong> и <strong>Spring Boot</strong> для бэкенда, и
                        чистым адаптивным фронтендом на <strong>HTML</strong>, <strong>CSS</strong>,
                        и <strong>JavaScript</strong>.
                    </p>
                    <p>
                        Получен практический опыт проектирования и реализации RESTful API, управления
                        состоянием игры на стороне сервера и развертывания работающего приложения с использованием
                        <strong> Railway</strong>.
                    </p>
                    <p>
                        Это классическая игра Сапер с небольшой изюминкой — вместо мин вы пытаетесь избежать
                        встречи с агрессивными котятами. Те же правила, другие ставки.
                    </p>
                    Игра доступна по адресу{" "}
                    <a
                        href="https://kittensweeper.up.railway.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        kittensweeper.up.railway.app
                    </a>. Код доступен на{" "}
                    <a
                        href="https://github.com/Olga-Gol/Minesweeper/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>.
                </div>
            </>
        ),
    },
    {
        id: 10,
        name: "TensorFlow",
        showNameOnButton: false,
        category: "Frameworks & Libraries",
        importance: "high",
        bgImage: '/images/tensor.png',
        description: () => (
            <>
                <div className="tensorflow">
                    <div className="tensorflow-image-container">
                        <a
                            href="https://github.com/Olga-Gol/PhishingWebsitesML/blob/main/ML%20models/NeuralNetwork.ipynb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/papers/tensorflow.png"
                                alt="Проект TensorFlow"
                                className="tensorflow-image"
                            />
                            <div className="tensorflow-image-overlay">Проект TensorFlow</div>
                        </a>
                    </div>
                    <div className="tensorflow-text">
                        <p>
                            Опыт работы с TensorFlow для создания, обучения и развертывания нейронных сетей с акцентом на
                            оценку моделей и готовность к продакшену.
                        </p>
                        <p>
                            Применен TensorFlow для разработки нейронной сети, предсказывающей фишинговые сайты по URL, достигнута точность 96.61%
                            на тестовых данных.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 11,
        name: "Оптимизация",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        bgImage: '/images/opt.png',
        description: () => (
            <>
                <div className="optimization">
                    <div className="project-image-container">
                        <a
                            href="/papers/minesweeper-lp.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/papers/minesweeper.png"
                                alt="Проект по оптимизации Сапера"
                                className="project-image"
                            />
                            <div className="image-overlay">Документ по оптимизации Сапера</div>
                        </a>
                    </div>
                    <div className="optimization-text">
                        <p>
                            Сильные знания в математической оптимизации, включая линейное программирование (LP), целочисленное LP,
                            выпуклую оптимизацию, минимальные сетевые потоки (MCNF), метаэвристики и задачи удовлетворения ограничений (CSP).
                        </p>
                        <p>
                            Опыт применения методов оптимизации к сложным задачам распределения ресурсов, планирования и
                            улучшения эффективности алгоритмов.
                        </p>
                        <p>
                            <strong>Выбранный проект:</strong> Разработана LP-модель для игры Сапер, формулирующая
                            игровые ограничения как линейные уравнения для идентификации безопасных ходов. Модель адаптирует существующие подходы и
                            демонстрирует практическое применение на поле 5x5.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 12,
        name: "Публикации",
        showNameOnButton: true,
        category: "Additional Skills",
        importance: "high",
        bgImage: '/images/publications.png',
        description: () => (
            <>
                <div className="publications-grid">
                    <div className="publication-image-container">
                        <a
                            href="https://arxiv.org/abs/2503.01988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-image-link"
                        >
                            <img
                                src="/papers/software.jpg"
                                alt="Программное обеспечение для полигональной геометрии Томпсона и Функа"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    Программное обеспечение для полигональной геометрии Томпсона и Функа
                                </div>
                                <div className="overlay-description">
                                    Принято для презентации на SoCG 2025 (конференция уровня Rank A). Интерактивные инструменты для геометрий
                                    Функа, Томпсона и Гильберта в выпуклых многоугольниках.
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="publication-image-container">
                        <a
                            href="https://arxiv.org/abs/2412.17138"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-image-link"
                        >
                            <img
                                src="/papers/balls.jpg"
                                alt="О свойстве Гейне-Бореля и минимальных ограничивающих сферах"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    О свойстве Гейне-Бореля и минимальных ограничивающих сферах
                                </div>
                                <div className="overlay-description">
                                    Препринт. Структуры типа LP в задачах минимальных сфер для метрик Гильберта, Томпсона
                                    и Функа.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 13,
        name: "Node.js",
        showNameOnButton: false,
        category: "Frameworks & Libraries",
        importance: "high",
        bgImage: '/images/node.png',
        description: () => (
            <>
                 <p>
                    Использован Node.js с Express для прототипирования API для игры SHELTER на ранних этапах разработки.
                    Изучены основные концепции:
                </p>
                <ul>
                    <li>Создание базовых REST-эндпоинтов (GET/POST)</li>
                    <li>Роутинг с Express.js</li>
                    <li>Тестирование API с Postman</li>
                    <li>Подключение фронтенда (React Native) к бэкенду</li>
                </ul>
                <p>
                    Хотя финальное приложение работает оффлайн, этот эксперимент дал практический опыт работы с серверным JavaScript.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Игра SHELTER (React Native / Expo)",
                skillId: 7
            }
        ]
    },
    {
        id: 14,
        name: "Машинное обучение",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        bgImage: '/images/ml.png',
        description: () => (
            <>
               <p>
                    Комплексное понимание принципов, алгоритмов и приложений машинного обучения.
                    Опыт с обучением с учителем и без, оценкой моделей и feature engineering.
                </p>
                <p>
                    Разработаны и развернуты модели для классификации, регрессии, кластеризации и оптимизации с использованием библиотек
                    <strong> scikit-learn</strong>, <strong>TensorFlow</strong>, и <strong>PyTorch</strong>.
                </p>
                <p>
                    Созданы несколько моделей для <strong>обнаружения фишинговых сайтов</strong> по характеристикам URL.
                    Реализованы <strong>нейронные сети</strong> (TensorFlow), <strong>деревья решений</strong>, и <strong>многомерная линейная регрессия</strong> (scikit-learn),
                    достигнута высокая точность:
                    <ul>
                        <li>Нейронная сеть — 96.7% (тренировка) / 96.61% (тест)</li>
                        <li>Дерево решений — 98% (тренировка) / 96% (тест)</li>
                        <li>Регрессия — 70.96% (тренировка) / 66.71% (тест)</li>
                    </ul>
                </p>
                <a
                    href="https://github.com/Olga-Gol/PhishingWebsitesML.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold' }}
                >
                    Посмотреть проект на GitHub
                </a>

            </>
        ),

        relatedProjects: [
            {
                label: "TensorFlow",
                skillId: 10
            }
        ]
    },
    {
        id: 15,
        name: "Алгоритмы",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        bgImage: '/images/algo.png',
        description: () => (
            <>
                <p>
                    Глубокая теоретическая и практическая база в алгоритмах через исследования, преподавание и реализацию:
                </p>
                <h4>Опыт исследований</h4>
                <ul>
                    <li>
                        <strong>Вычислительная геометрия (REU @ UMD):</strong> Доказаны свойства минимальной ограничивающей сферы (MEB) в метрических пространствах Гильберта и разработаны инструменты визуализации (JavaScript).
                        <br /><a href="https://funk-geo-visualizer.vercel.app" target="_blank">Посмотреть визуализацию</a>
                    </li>
                    <li>
                        <strong>Решатель Сапера:</strong> Разработан LP-алгоритм для идентификации безопасных ходов путем формулирования игровых ограничений как линейных уравнений.
                    </li>
                </ul>

                <h4>Преподавание</h4>
                <p>
                    Ассистент преподавателя по курсу Алгоритмов в Mount Holyoke College, охватывающему:
                </p>
                <ul>
                    <li>Графовые алгоритмы (Дейкстры, BFS/DFS, алгоритмы MST)</li>
                    <li>Анализ сложности и методы оптимизации</li>
                </ul>

                <h4>Ключевые навыки</h4>
                <ul>
                    <li>Проектирование/анализ алгоритмов (LP, выпуклая оптимизация, метрические пространства)</li>
                    <li>Математическое моделирование вычислительных задач</li>
                    <li>Визуализация алгоритмов и обучение</li>
                </ul>
            </>
        ),
        relatedProjects: [
            {
                label: "Алгоритм минимальной ограничивающей сферы (Вычислительная геометрия)",
                skillId: 8
            },
            {
                label: "LP-алгоритм для решения Сапера (Оптимизация)",
                skillId: 10
            }
        ]
    },
];

export default projectData;
