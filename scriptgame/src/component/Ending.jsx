import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ending = () => {
  const navigate = useNavigate();

  return (
    <div className="ending-container">
      <div className="ending-content">
        <h1>축하합니다! 🎉</h1>
        <h2>모든 레벨을 완료하셨습니다!</h2>
        <div className="ending-message">
          <p>당신은 이제 JavaScript 마스터입니다.</p>
          <p>총 50개의 도전과제를 모두 성공적으로 해결하셨습니다.</p>
          <p>계속해서 코딩의 세계를 탐험해보세요!</p>
        </div>
        <div className="ending-buttons">
          <button 
            className="game-btn"
            onClick={() => navigate('/game')}
          >
            레벨 다시 풀어보기
          </button>
          <button 
            className="back-btn"
            onClick={() => navigate('/')}
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ending; 