import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Main from './components/Main';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer'; 
import './cursor.js';
import './App.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (anchor) => {
    setIsOpen(false);
    document.querySelector(anchor).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {!isOpen && (
        <button className="menu-button" onClick={() => setIsOpen(true)}>☰</button>
      )}
      {isOpen && (
        <div className="side-menu">
          <button className="close-menu" onClick={() => setIsOpen(false)}>x</button>
          <div style={{ height: '40px' }}></div>
          <a href="#home" onClick={() => handleMenuItemClick('#home')}>Главная</a>
          <a href="#main" onClick={() => handleMenuItemClick('#main')}>Проекты</a>
          <a href="#experience" onClick={() => handleMenuItemClick('#experience')}>Опыт</a>
          <a href="#skills" onClick={() => handleMenuItemClick('#skills')}>Навыки</a>
          <a href="mailto:olga.golovatskaia@gmail.com">Контакты</a>
        </div>
      )}
    </>
  );
};

function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <SideMenu />
          <section id="home"><HomePage /></section>
          <section id="main"><Main /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;