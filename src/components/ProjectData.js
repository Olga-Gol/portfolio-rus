const projectData = [
    {
        id: 1,
        name: "Data Analysis",
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
                            <div className="data-analysis-image-overlay">Global Recipe Sentiment Analysis</div>
                        </a>
                    </div>
                    <div className="data-analysis-text">
                        <p>
                            Experience in data analysis using Python and libraries like <strong>pandas, </strong>
                            <strong>numpy, </strong> <strong>matplotlib,</strong> and <strong>nltk</strong>.
                            Skilled in data cleaning, exploratory data analysis, visualization, and statistical
                            reasoning.
                        </p>
                        <p>
                            <strong>Selected project: </strong>Conducted a sentiment analysis on a large dataset
                            of international recipes scraped from The New York Times. Analyzed how people
                            emotionally responded to food from different countries across decades,
                            comparing trends in positive and negative sentiment.
                        </p>
                        <p>
                            Applied natural language processing techniques in <strong>Jupyter Notebook </strong>
                            to uncover cultural and temporal patterns in food reviews and comments.
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
                    Extensive experience with Java development across various applications and systems.
                    Proficient in core Java concepts including OOP principles, data structures, multithreading,
                    and design patterns.
                </p>
                <p>
                    Built several applications leveraging Java's robust libraries and frameworks, focusing on
                    performance optimization and clean code architecture.
                </p>

            </>
        ),
        relatedProjects: [
            {
                label: "Minesweeper (Spring Boot)",
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
                    Strong proficiency in JavaScript for both front-end and back-end development.
                    Experienced with ES6+ features, asynchronous programming, and functional concepts.
                </p>
                <p>
                    Developed interactive web applications and utilized JavaScript frameworks like React
                    to create responsive user interfaces with efficient state management.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Visualizing metrics (Computational Geometry)",
                skillId: 8
            },
            {
                label: "Portfolio website (React)",
                skillId: 6
            },
            {
                label: "SHELTER Game (React Native / Expo)",
                skillId: 7
            },
            {
                label: "Minesweeper (Spring Boot)",
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
                    Advanced Python skills applied across machine learning, data analysis, and algorithm design.
                    Extensive experience with libraries such as <strong>Pandas, </strong> <strong>NumPy, </strong>
                    <strong>Matplotlib, </strong> <strong>Seaborn, </strong> <strong>Graphviz, </strong> and
                    <strong> nltk</strong> for processing, analyzing, and visualizing complex datasets.
                </p>
                <p>
                    Built and evaluated models using <strong>scikit-learn, </strong> <strong>TensorFlow, </strong>
                    and <strong>PyTorch, </strong> with a strong focus on optimization techniques and applications
                    in computational geometry and real-world classification tasks.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "Global Recipe Sentiment Analysis (pandas, numpy, matplotlib, nltk)",
                skillId: 1
            },
            {
                label: "Phishing websites prediction (TensorFlow)",
                skillId: 10
            },
            {
                label: "Linear regression, decision trees (scikit-learn)",
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
                                alt="Runge-Kutta Method"
                                className="matlab-project-image"
                            />
                            <div className="matlab-image-overlay">Runge-Kutta Method</div>
                        </a>
                    </div>
                    <div className="matlab-text">
                        <p>
                            Extensive experience with MATLAB, particularly in the context of linear algebra and ordinary differential equations (ODEs).
                            Familiar with solving large systems of linear equations, performing LU and QR decompositions, computing eigenvalues and eigenvectors,
                            and analyzing the stability of matrices. In ODEs, experience includes both analytical and numerical approaches,
                            such as implementing Euler’s method, Runge-Kutta methods, and phase plane analysis.
                        </p>
                        <p>
                            Additionally skilled in using MATLAB for data visualization, simulation of mathematical models, and algorithm prototyping
                            for mathematical analysis and engineering problems.
                        </p>
                        <p>
                            <strong>Selected project:</strong> Authored a report providing an overview of the classical fourth-order Runge-Kutta method
                            for solving initial value problems in ODEs. Implemented the method in MATLAB, validated the results with known
                            analytical solutions, and visualized error behavior across varying step sizes. The project emphasized both
                            theoretical foundations and practical implementation.
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
                                alt="Portfolio Website Preview"
                                className="portfolio-image"
                            />
                            <div className="portfolio-image-overlay">This portfolio is built with React - view main page</div>
                        </a>
                    </div>
                    <div className="portfolio-text">
                        <p>
                            I build modern web apps using React, with a strong focus on component structure, hooks,
                            context, and managing state effectively.
                        </p>
                        <p>
                            Developed responsive, interactive interfaces that prioritize reusable components and smooth, efficient rendering.
                        </p>
                        <p>
                            <strong>Selected project:</strong> This portfolio website, fully built in React with a custom design
                            system and responsive layout written in plain CSS.
                        </p>
                        <a
                            href="https://github.com/Olga-Gol/Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: 'bold' }}
                        >
                            View project on GitHub
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
                    SHELTER is a mobile adaptation of a strategic board game where players receive a random set of cards
                    representing traits such as gender, age, and profession. The objective is to persuade others that your
                    character’s attributes enhance survival chances in a bunker scenario.
                </p>
                <p>
                    My first dive into iOS development, built with React Native and Expo. While mostly frontend-focused, I used Node.js
                    for prototyping early API endpoints (like card data fetching). The final app runs
                    offline, but the Node experiments helped me grasp full-stack workflows.
                </p>
                <h4>Technical Skills Applied:</h4>
                <ul className="shelter">
                    <li><strong>React Native:</strong> Built the entire UI with animations, touch interactions, and
                        offline-ready state management (hooks).</li>
                    <li><strong>Expo:</strong> Simplified builds and bypassed native code for this pure-JS project.</li>
                    <li><strong>Node.js:</strong> Prototyped API endpoints during early development to test data flows.</li>

                </ul>
                <a
                    href="https://github.com/Olga-Gol/ShelterGame"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View project on GitHub
                </a>
            </>
        ),
    },
    {
        id: 8,
        name: "Computational Geometry",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        videos: [
            "/videos/hilbert1.webm",
            "/videos/hilbert2.webm",
            "/videos/hilbert3.webm"
        ],
        bgImage: '/images/compgeo.gif',
        description: () => (
            <div>
                <p>
                    Conducted advanced research in computational geometry during the REU program for
                    Combinatorics, Algorithms, and AI for Real Problems at the University of Maryland,
                    College Park. Focused on theoretical problems in the Hilbert metric space, including
                    the Minimum Enclosing Ball (MEB) problem.
                </p>
                <p>
                    Proved that minimum radius balls over metric spaces with the Heine-Borel property are
                    LP-type problems, and developed geometric primitives for computing such balls in Hilbert
                    geometry. Demonstrated extension properties in weak metric spaces and contributed to a
                    dynamic visualization tool for convex polygonal domains.
                </p>
                <p>
                    Co-developed an interactive JavaScript-based application for visualizing and manipulating
                    Funk, reverse Funk, and Thompson balls in convex sets. The tool is publicly available at{" "}
                    <a
                        href="https://funk-geo-visualizer.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        funk-geo-visualizer.vercel.app
                    </a>. View the code on{" "}
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
                        Built a full-stack <strong>Minesweeper-style game</strong> using
                        <strong> Java</strong> and <strong>Spring Boot</strong> for the backend, with a
                        clean and responsive frontend in <strong>HTML</strong>, <strong>CSS</strong>,
                        and <strong>JavaScript</strong>.
                    </p>
                    <p>
                        Gained practical experience designing and implementing RESTful APIs, managing
                        game state server-side, and deploying a live application using
                        <strong> Railway</strong>.
                    </p>
                    <p>
                        This is a classic Minesweeper game with a slightly chaotic twist — instead of mines,
                        you're trying to avoid stepping on vicious kittens. Same rules, different stakes.

                    </p>
                    The game is publicly available at{" "}
                    <a
                        href="https://kittensweeper.up.railway.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        kittensweeper.up.railway.app
                    </a>. View the code on{" "}
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
                                alt="TensorFlow Project"
                                className="tensorflow-image"
                            />
                            <div className="tensorflow-image-overlay">TensorFlow Project</div>
                        </a>
                    </div>
                    <div className="tensorflow-text">
                        <p>
                            Experience with TensorFlow for building, training, and deploying neural network models with strong focus on
                            model evaluation and production readiness.
                        </p>

                        <p>
                            Applied TensorFlow to develop a neural network that predicts phishing websites based on URLs, achieving 96.61%
                            test accuracy.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 11,
        name: "Optimization",
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
                                alt="Minesweeper Optimization Project"
                                className="project-image"
                            />
                            <div className="image-overlay">Minesweeper Optimization Paper</div>
                        </a>
                    </div>
                    <div className="optimization-text">
                        <p>
                            Strong background in mathematical optimization, including linear programming (LP), integer LP,
                            convex optimization, minimum-cost network flow (MCNF), metaheuristics, and constraint satisfaction problems (CSP).
                        </p>
                        <p>
                            Experienced in applying optimization techniques to complex problems in resource allocation, scheduling, and
                            improving algorithm efficiency.
                        </p>

                        <p>
                            <strong>Selected project:</strong> Developed an LP-based model for the Minesweeper game that formulates
                            game constraints as linear equations to identify safe moves. The model adapts existing approaches and
                            demonstrates practical application on a 5x5 board.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 12,
        name: "Publications",
        showNameOnButton: true,
        category: "Additional Skills",
        importance: "high",
        bgImage: '/images/publications.jpg',
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
                                alt="Software for the Thompson and Funk Polygonal Geometry"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    Software for the Thompson and Funk Polygonal Geometry
                                </div>
                                <div className="overlay-description">
                                    Accepted for presentation at SoCG 2025, a Rank A conference. Interactive tools for Funk,
                                    Thompson, and Hilbert geometries in convex polygons.
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
                                alt="On The Heine-Borel Property and Minimum Enclosing Balls"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    On The Heine-Borel Property and Minimum Enclosing Balls
                                </div>
                                <div className="overlay-description">
                                    Preprint. LP-type structures in minimum-radius ball problems for Hilbert, Thompson,
                                    and Funk metrics.
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
                    Used Node.js with Express to prototype backend APIs for the SHELTER game during early development.
                    Learned core concepts like:
                </p>
                <ul>
                    <li>Creating basic REST endpoints (GET/POST)</li>
                    <li>Routing with Express.js</li>
                    <li>Testing API flows with Postman</li>
                    <li>Connecting frontend (React Native) to backend</li>
                </ul>
                <p>
                    Though the final app runs offline, this experiment gave me hands-on experience with server-side JavaScript.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "SHELTER Game (React Native / Expo)",
                skillId: 7
            }
        ]
    },
    {
        id: 14,
        name: "Machine Learning",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        bgImage: '/images/ml.jpg',
        description: () => (
            <>
                <p>
                    Comprehensive understanding of machine learning principles, algorithms, and applications.
                    Experience with supervised and unsupervised learning, model evaluation, and feature engineering.
                </p>
                <p>
                    Developed and deployed models for classification, regression, clustering, and optimization problems using libraries such as
                    <strong> scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>PyTorch</strong>.
                </p>
                <p>
                    Designed multiple models for <strong>phishing website detection</strong> using URL features.
                    Implemented <strong>neural networks</strong> (TensorFlow), <strong>decision trees</strong>, and <strong>multivariate linear regression</strong> (scikit-learn),
                    achieving high accuracy:
                    <ul>
                        <li>Neural network — 96.7% (train) / 96.61% (test)</li>
                        <li>Decision tree — 98% (train) / 96% (test)</li>
                        <li>Regression — 70.96% (train) / 66.71% (test)</li>
                    </ul>
                </p>
                <a
                    href="https://github.com/Olga-Gol/PhishingWebsitesML.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold' }}
                >
                    View project on GitHub
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
        name: "Algorithms",
        showNameOnButton: true,
        category: "Technical Fields",
        importance: "high",
        bgImage: '/images/algo.jpg',
        description: () => (
            <>
                <p>
                    Strong theoretical and practical background in algorithms through research, teaching, and implementation:
                </p>
                <h4>Research Experience</h4>
                <ul>
                    <li>
                        <strong>Computational Geometry (REU @ UMD):</strong> Proved Minimum Enclosing Ball (MEB) properties in Hilbert metric spaces and developed visualization tools (JavaScript).
                        <br /><a href="https://funk-geo-visualizer.vercel.app" target="_blank">View Visualization</a>
                    </li>
                    <li>
                        <strong>Minesweeper Solver:</strong> Designed an LP-based algorithm to identify safe moves by formulating game constraints as linear equations.
                    </li>
                </ul>

                <h4>Teaching</h4>
                <p>
                    TA for Algorithms course at Mount Holyoke College, covering:
                </p>
                <ul>
                    <li>Graph algorithms (Dijkstra's, BFS/DFS, MST algorithms)</li>
                    <li>Complexity analysis and optimization techniques</li>
                </ul>

                <h4>Key Skills</h4>
                <ul>
                    <li>Algorithm design/analysis (LP, convex optimization, metric spaces)</li>
                    <li>Mathematical modeling for computational problems</li>
                    <li>Algorithm visualization and education</li>
                </ul>
            </>
        ),
        relatedProjects: [
            {
                label: "Minimum Enclosing Ball Algorithm (Computational Geometry)",
                skillId: 8
            },
            {
                label: "LP-based algorithm to solve Minesweeper (Optimization)",
                skillId: 10
            }
        ]
    },
];

export default projectData;
