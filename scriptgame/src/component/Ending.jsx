import React from 'react';
import { Link } from 'react-router-dom';

const Ending = () => {
  return (
    <div className="ending-container">
      <div className="ending-content">
        <h1>Congratulations!</h1>
        <h2>You have completed all levels!</h2>
        <div className="ending-message">
          <p>Thank you for playing!</p>
        </div>
        <div className="ending-buttons">
          <Link to="/game">
            <button className="game-btn">Play Again</button>
          </Link>
          <Link to="/">
            <button className="back-btn">Back to Main Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ending; 