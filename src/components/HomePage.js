import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="home-container">
    <div className="profile-section">
      <img src="/profile-pic-new.jpg" alt="Profile" className="profile-picture" />

    </div>
    <div className="introduction-section">
      <div className="cursor-section">
        <h1>Привет, я <strong>Ольга Головацкая</strong></h1>

        <p>Я окончила бакалавриат Mount Holyoke College с двойной специализацией: Математика и Информатика. Мне интересны
          <strong> алгоритмы</strong>, <strong>машинное обучение</strong>, <strong>оптимизация</strong> и <strong>вычислительная геометрия</strong>.
          Мне нравится работать с такими языками как <strong>Java</strong>, <strong>JavaScript</strong> и <strong>Python</strong>,
          а также создавать проекты с помощью <strong>React</strong>, <strong>Spring Boot</strong> и <strong>TensorFlow</strong>.
        </p>
        <p>Когда я не пишу код, вы можете найти меня за чтением хорошей книги или созданием небольших игр для друзей.</p>
      </div>

      <blockquote className="quote">Все великие дела и все великие мысли имеют смехотворное начало.</blockquote>
      <p className="quote-author">- Альбер Камю</p>


      <div className="profile-links">
        <a href="/papers/CV.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/images/CVicon.png" alt="CV" />
        </a>
        <a href="https://github.com/Olga-Gol" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/olga-golovatskaia-a4a874232" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:o.golovatskaia@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/gmail.png" alt="Gmail" />
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;
