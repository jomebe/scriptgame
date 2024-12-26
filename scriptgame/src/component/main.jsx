import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/index.css';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 파티클 생성
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.opacity = Math.random();
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="main-container">
      <div className="particles"></div>
      <h1 className="title">Script Game</h1>
      <button 
        className="start-btn"
        onClick={() => navigate('/game')}
      >
        Start Game
      </button>
    </div>
  );
};

export default Main;
