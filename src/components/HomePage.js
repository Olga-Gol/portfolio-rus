import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="home-container">
    <div className="profile-section">
      <img src="/profile-pic-new.jpg" alt="Profile" className="profile-picture" />

    </div>
    <div className="introduction-section">
      <h1>Hey, I'm <strong>Olga (Olya) Golovatskaia</strong></h1>

      <p>I'm a recent Computer Science & Mathematics graduate from Mount Holyoke College, interested in
        <strong> algorithms</strong>, <strong>machine learning</strong>, <strong>optimization</strong>, and <strong>computational geometry</strong>.
        I enjoy working with languages like <strong>Java</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>,
        and building with <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>TensorFlow</strong>.
      </p>
      <p> When I'm not coding, you'll find me reading a good book or making little games for friends. </p>

      <blockquote className="quote">All great deeds and all great thoughts have a ridiculous beginning.</blockquote>
      <p className="quote-author">- Albert Camus</p>

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
        <a href="mailto:olga.golovatskaia@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/gmail.png" alt="Gmail" />
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;
