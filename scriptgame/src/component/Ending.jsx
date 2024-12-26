import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ending.css';

const Ending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 파티클 생성
    const createParticles = () => {
      const particlesContainer = document.querySelector('.ending-particles');
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'ending-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.opacity = Math.random();
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="ending-container">
      <div className="ending-particles"></div>
      <div className="ending-content">
        <h1 className="ending-title">축하합니다!</h1>
        <p className="ending-message">
          모든 레벨을 클리어하셨습니다!<br/>
          당신은 진정한 코딩 마스터입니다!
        </p>
        <button 
          className="ending-btn"
          onClick={() => navigate('/')}
        >
          메인으로 돌아가기
        </button>
        <button 
          className="ending-btn"
          onClick={() => navigate('/game')}
        >
          다시 도전하기
        </button>
      </div>
    </div>
  );
};

export default Ending; 