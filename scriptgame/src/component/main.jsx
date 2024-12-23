import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <h1>게임 타이틀</h1>
      <div className="btn-wrapper">
        <button 
          className="game-btn"
          onClick={() => navigate('/game')}
        >
          게임 시작
        </button>
      </div>
    </div>
  );
};

export default Main;
