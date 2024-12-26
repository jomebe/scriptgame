import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/main.css';

const Game = () => {
  const navigate = useNavigate();
  const [clearedLevels, setClearedLevels] = useState([]);
  
  useEffect(() => {
    loadClearedLevels();
  }, []);

  const loadClearedLevels = () => {
    const savedLevels = JSON.parse(localStorage.getItem('clearedLevels') || '[]');
    setClearedLevels(savedLevels);
  };

  const isLevelLocked = (levelNum) => {
    if (levelNum === 1) return false;
    return !clearedLevels.includes(levelNum - 1);
  };

  const resetProgress = () => {
    if (window.confirm('정말 모든 진행 상황을 초기화하시겠습니까?')) {
      localStorage.removeItem('clearedLevels');
      setClearedLevels([]);
    }
  };
  
  const handleStartLevel = () => {
    navigate('/play/1');
  };

  return (
    <div className="game-container">
      <h1>레벨 선택 화면</h1>
      <div className="button-container">
        <button 
          className="reset-btn"
          onClick={resetProgress}
        >
          진행 상황 초기화
        </button>
      </div>
      <div className="level-grid">
        {[...Array(50)].map((_, index) => {
          const levelNum = index + 1;
          const locked = isLevelLocked(levelNum);
          
          return (
            <button 
              key={levelNum}
              className={`level-btn ${locked ? 'locked' : ''}`}
              onClick={() => !locked && navigate(`/play/${levelNum}`)}
              disabled={locked}
            >
              {locked ? '🔒' : `레벨 ${levelNum}`}
            </button>
          );
        })}
      </div>
      <button 
        className="back-btn"
        onClick={() => navigate('/')}
      >
        메인으로 돌아가기
      </button>
      <Link to="/play/1">
        <button>레벨 1 시작</button>
      </Link>
    </div>
  );
};

export default Game; 