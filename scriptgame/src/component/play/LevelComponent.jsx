import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { levelData } from '../../data/levelData';

const LevelComponent = () => {
  const navigate = useNavigate();
  const { levelId } = useParams();
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  
  const currentLevel = levelData.find(level => level.level === parseInt(levelId));
  
  useEffect(() => {
    // 이전 레벨을 클리어하지 않았다면 레벨 선택 화면으로 돌아가기
    const savedLevels = JSON.parse(localStorage.getItem('clearedLevels') || '[]');
    const currentLevelNum = parseInt(levelId);
    
    if (currentLevelNum !== 1 && !savedLevels.includes(currentLevelNum - 1)) {
      navigate('/game');
    }
  }, [levelId, navigate]);

  const saveClearedLevel = (levelNum) => {
    let savedLevels = JSON.parse(localStorage.getItem('clearedLevels') || '[]');
    savedLevels = [...new Set([...savedLevels, levelNum])]; // 중복 제거
    localStorage.setItem('clearedLevels', JSON.stringify(savedLevels));
    
    // 디버깅용 콘솔 로그
    console.log('Saved levels after clear:', savedLevels);
  };
  
  const checkAnswer = () => {
    if (userInput.toLowerCase().trim() === currentLevel.answer) {
      saveClearedLevel(parseInt(levelId));
      if (parseInt(levelId) < 50) {
        navigate(`/play/${parseInt(levelId) + 1}`);
      } else {
        navigate('/ending');
      }
    } else {
      setMessage('틀렸습니다. 다시 시도해보세요.');
      setTimeout(() => {
        setMessage('');
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  if (!currentLevel) {
    return <div>레벨을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="level-container">
      <h1>레벨 {currentLevel.level}</h1>
      <div className="problem-container">
        <h2>문제</h2>
        <p>{currentLevel.question}</p>
        <pre className="code-block">
          <code>
            {currentLevel.code}
          </code>
        </pre>
      </div>
      
      <div className="hint-container">
        <button 
          className="hint-btn"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? '힌트 숨기기' : '힌트 보기'}
        </button>
        {showHint && (
          <div className="hint-text">
            💡 {currentLevel.hint}
          </div>
        )}
      </div>
      
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="정답을 입력하세요"
          className="answer-input"
        />
        <button onClick={checkAnswer} className="submit-btn">
          제출
        </button>
      </div>
      
      {message && <p className="error-message">{message}</p>}
      
      <button 
        className="back-btn"
        onClick={() => navigate('/game')}
      >
        레벨 선택으로 돌아가기
      </button>
    </div>
  );
};

export default LevelComponent; 