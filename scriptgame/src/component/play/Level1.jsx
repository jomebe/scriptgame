import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level1 = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  
  const checkAnswer = () => {
    const answer = 'hello world'; // 정답
    if (userInput.toLowerCase().trim() === answer) {
      setMessage('정답입니다! 다음 레벨로 이동합니다.');
      setTimeout(() => {
        navigate('/play/2');
      }, 1500);
    } else {
      setMessage('틀렸습니다. 다시 시도해보세요.');
    }
  };

  return (
    <div className="level-container">
      <h1>레벨 1</h1>
      <div className="problem-container">
        <h2>문제</h2>
        <p>다음 코드의 출력 결과는?</p>
        <pre className="code-block">
          <code>
            console.log("Hello World");
          </code>
        </pre>
      </div>
      
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="정답을 입력하세요"
          className="answer-input"
        />
        <button onClick={checkAnswer} className="submit-btn">
          제출
        </button>
      </div>
      
      {message && <p className={message.includes('정답') ? 'success-message' : 'error-message'}>{message}</p>}
      
      <button 
        className="back-btn"
        onClick={() => navigate('/game')}
      >
        레벨 선택으로 돌아가기
      </button>
    </div>
  );
};

export default Level1; 