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
      setMessage('Wrong answer. Please try again.');
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
    return <div>Level not found.</div>;
  }

  return (
    <div className="level-container">
      <h1>Level {currentLevel.level}</h1>
      <div className="problem-container">
        <h2>Question</h2>
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
          {showHint ? 'Hide Hint' : 'Show Hint'}
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
          placeholder="Enter your answer"
          className="answer-input"
        />
        <button onClick={checkAnswer} className="submit-btn">
          Submit
        </button>
      </div>
      
      {message && <p className="error-message">{message}</p>}
      
      <button 
        className="back-btn"
        onClick={() => navigate('/game')}
      >
        Back to Level Selection
      </button>
    </div>
  );
};

export default LevelComponent; 