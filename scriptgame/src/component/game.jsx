import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { levelData } from '../data/levelData';
import '../style/game.css';

// 초기 코드 수정
const INITIAL_PLAYER_CODE = `{
  speed: 5,
  size: 30,
  color: 'blue',
  x: 50,
  y: 50,
  jumpPower: 15,
  gravity: 0.8,
  bounce: 0,
  trail: false,
  trailColor: 'rgba(0,0,255,0.2)',
  shape: 'rect',
  invincible: false
}`;

const Game = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [playerCode, setPlayerCode] = useState(INITIAL_PLAYER_CODE);
  const [codeError, setCodeError] = useState('');
  const canvasRef = useRef(null);
  const playerPosRef = useRef({ x: 50, y: 50 });
  const verticalVelocityRef = useRef(0);
  const isJumpingRef = useRef(false);

  // 코드 실행 함수
  const executePlayerCode = (code) => {
    try {
      const playerConfig = Function(`return ${code}`)();
      return {
        speed: Number(playerConfig.speed) || 5,
        size: Number(playerConfig.size) || 30,
        color: String(playerConfig.color) || 'blue',
        x: Number(playerConfig.x),
        y: Number(playerConfig.y),
        jumpPower: Number(playerConfig.jumpPower) || 0,
        gravity: Number(playerConfig.gravity) || 1,
        bounce: Number(playerConfig.bounce) || 0,
        trail: Boolean(playerConfig.trail),
        trailColor: String(playerConfig.trailColor) || 'rgba(0,0,255,0.2)',
        shape: String(playerConfig.shape) || 'rect',
        invincible: Boolean(playerConfig.invincible)
      };
    } catch (error) {
      setCodeError('코드 실행 중 오류가 발생했습니다: ' + error.message);
      return null;
    }
  };

  // 레벨 선택 화면
  const renderLevelSelect = () => {
    return (
      <div className="level-select-container">
        <h1>레벨 선택</h1>
        <div className="level-grid">
          {levelData.map((level) => (
            <button
              key={level.id}
              className="level-btn"
              onClick={() => handleLevelSelect(level)}
            >
              <div className="level-btn-content">
                <span className="level-number">레벨 {level.id}</span>
                <span className="level-name">{level.name}</span>
              </div>
            </button>
          ))}
        </div>
        <button 
          className="back-btn"
          onClick={() => navigate('/')}
        >
          메인으로 돌아가기
        </button>
      </div>
    );
  };

  // 충돌 감지 함수
  const checkCollision = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  // 게임 화면
  useEffect(() => {
    if (showLevelSelect) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const level = levelData[currentLevel - 1];

    let playerConfig = executePlayerCode(playerCode);
    if (!playerConfig) return;

    // 키 입력 상태 관리
    const keys = {};
    
    const handleKeyDown = (e) => {
      keys[e.key] = true;
      // 스페이스바를 눌렀을 때 점프
      if (e.key === ' ' && !isJumpingRef.current && playerConfig.jumpPower > 0) {
        verticalVelocityRef.current = -playerConfig.jumpPower;
        isJumpingRef.current = true;
      }
      if (e.key === 'Escape') {
        setShowLevelSelect(true);
      }
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 게임 루프
    let animationFrameId;
    let startTime = Date.now();
    
    const gameLoop = () => {
      // 캔버스 지우기
      context.clearRect(0, 0, canvas.width, canvas.height);

      // 레벨 정보 표시
      context.fillStyle = 'white';
      context.font = '20px Arial';
      context.fillText(`레벨 ${currentLevel}: ${level.name}`, 20, 30);
      context.font = '16px Arial';
      context.fillText(level.description, 20, 60);

      // 시간 제한 체크
      if (level.timeLimit) {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        const timeLeft = level.timeLimit - elapsedTime;

        if (timeLeft <= 0) {
          // 시간 초과 시 부드럽게 재시작
          startTime = Date.now();
          verticalVelocityRef.current = 0;
          isJumpingRef.current = false;
          playerPosRef.current = { ...level.playerStart };
          
          // 시각적 피드백
          context.fillStyle = 'rgba(255, 0, 0, 0.3)';
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = 'white';
          context.font = '30px Orbitron';
          context.textAlign = 'center';
          context.fillText('시간 초과!', canvas.width/2, canvas.height/2);
          
          // 잠시 후 게임 재개
          setTimeout(() => {
            context.textAlign = 'left'; // 원래대로 복구
          }, 1000);
          
          return;
        }

        // 남은 시간 표시 (빨간색으로 변경되는 효과 추가)
        const timeColor = timeLeft < 3 ? 
          `rgba(255, ${Math.floor((timeLeft/3) * 255)}, 0, 1)` : 
          'white';
        context.fillStyle = timeColor;
        context.font = '20px Orbitron';
        context.fillText(`남은 시간: ${timeLeft.toFixed(1)}초`, 20, 90);
      }

      // 정확한 설정 체크
      if (level.requireExactConfig) {
        const config = level.requireExactConfig;
        let configMatch = true;
        
        // 각 필수 설정 확인
        for (const [key, value] of Object.entries(config)) {
          if (playerConfig[key] !== value) {
            configMatch = false;
            break;
          }
        }

        if (!configMatch) {
          context.fillStyle = 'yellow';
          context.font = '16px Arial';
          context.fillText('올바른 설정값을 입력하세요!', 20, 120);
          return;
        }
      }

      // 플레이어 움직임 업데이트
      let newX = playerPosRef.current.x;
      let newY = playerPosRef.current.y;

      if (keys['ArrowLeft']) newX -= playerConfig.speed;
      if (keys['ArrowRight']) newX += playerConfig.speed;

      // 중력과 수직 속도 적용
      verticalVelocityRef.current += playerConfig.gravity;
      newY += verticalVelocityRef.current;

      // 바닥 충돌 체크
      const floor = canvas.height - playerConfig.size;
      if (newY >= floor) {
        newY = floor;
        verticalVelocityRef.current = 0;
        isJumpingRef.current = false;
      }

      // 천장 충돌 체크
      if (newY < 0) {
        newY = 0;
        verticalVelocityRef.current = 0;
      }

      // 벽 충돌 시 튕김 처리
      if (playerConfig.bounce > 0) {
        // 좌우 벽에서 튕김
        if (newX <= 0 || newX >= canvas.width - playerConfig.size) {
          const direction = newX <= 0 ? 1 : -1;
          newX = newX <= 0 ? 0 : canvas.width - playerConfig.size;
          // 더 강한 튕김 효과
          newX += direction * (playerConfig.speed * 3) * playerConfig.bounce;
        }
        
        // 바닥이나 천장에서 튕김
        if (newY >= floor || newY <= 0) {
          // 더 강한 튕김 효과
          verticalVelocityRef.current = -verticalVelocityRef.current * (playerConfig.bounce * 1.5);
        }
      }

      // 장애물 충돌 체크
      const playerRect = {
        x: newX,
        y: newY,
        width: playerConfig.size,
        height: playerConfig.size
      };

      let collision = false;
      level.obstacles.forEach(obstacle => {
        if (checkCollision(playerRect, obstacle)) {
          collision = true;
          if (!playerConfig.invincible) {
            // 장애물 위에 착지
            if (playerPosRef.current.y + playerConfig.size <= obstacle.y) {
              newY = obstacle.y - playerConfig.size;
              if (playerConfig.bounce > 0 && verticalVelocityRef.current > 0) {
                // 위에서 착지할 때도 약간의 튕김 효과
                verticalVelocityRef.current = -verticalVelocityRef.current * (playerConfig.bounce * 0.8);
              } else {
                verticalVelocityRef.current = 0;
                isJumpingRef.current = false;
              }
            }
            // 아래에서 부딪힘
            else if (playerPosRef.current.y >= obstacle.y + obstacle.height) {
              newY = obstacle.y + obstacle.height;
              // 더 강한 튕김 효과
              verticalVelocityRef.current = Math.abs(verticalVelocityRef.current) * (playerConfig.bounce * 1.5);
            }
            // 왼쪽에서 부딪힘
            else if (playerPosRef.current.x + playerConfig.size <= obstacle.x) {
              newX = obstacle.x - playerConfig.size;
              if (playerConfig.bounce > 0) {
                // 더 강한 수평 튕김
                newX -= (playerConfig.speed * 3) * playerConfig.bounce;
              }
            }
            // 오른쪽에서 부딪힘
            else if (playerPosRef.current.x >= obstacle.x + obstacle.width) {
              newX = obstacle.x + obstacle.width;
              if (playerConfig.bounce > 0) {
                // 더 강한 수평 튕김
                newX += (playerConfig.speed * 3) * playerConfig.bounce;
              }
            }
          }
        }
      });

      // 충돌이 없거나 무적 상태일 때만 위치 업데이트
      if (!collision || playerConfig.invincible) {
        playerPosRef.current = { x: newX, y: newY };
      }

      // 목표지점 그리기
      context.fillStyle = 'green';
      context.beginPath();
      context.arc(level.goal.x, level.goal.y, 15, 0, Math.PI * 2);
      context.fill();

      // 보이지 않는 장애물 처리
      context.fillStyle = level.invisibleObstacles ? 'rgba(255,0,0,0)' : 'red';
      level.obstacles.forEach(obstacle => {
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });

      // 플레이어 그리기
      if (playerConfig.color === 'rainbow') {
        const hue = (Date.now() / 20) % 360;
        context.fillStyle = `hsl(${hue}, 100%, 50%)`;
      } else {
        context.fillStyle = playerConfig.color;
      }

      if (playerConfig.shape === 'circle') {
        context.beginPath();
        context.arc(
          playerPosRef.current.x + playerConfig.size/2,
          playerPosRef.current.y + playerConfig.size/2,
          playerConfig.size/2,
          0,
          Math.PI * 2
        );
        context.fill();
      } else {
        context.fillRect(
          playerPosRef.current.x,
          playerPosRef.current.y,
          playerConfig.size,
          playerConfig.size
        );
      }

      // 목표 도달 체크
      const goalRadius = 15;
      const distanceToGoal = Math.sqrt(
        Math.pow(playerPosRef.current.x + playerConfig.size/2 - level.goal.x, 2) +
        Math.pow(playerPosRef.current.y + playerConfig.size/2 - level.goal.y, 2)
      );

      if (distanceToGoal < goalRadius + playerConfig.size/2) {
        if (currentLevel < levelData.length) {
          alert('레벨 클리어!');
          const nextLevel = currentLevel + 1;
          setCurrentLevel(nextLevel);
          setPlayerCode(INITIAL_PLAYER_CODE); // 코드 초기화
          playerPosRef.current = levelData[nextLevel - 1].playerStart;
        } else {
          alert('모든 레벨을 클리어했습니다!');
          navigate('/ending');
        }
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showLevelSelect, currentLevel, navigate, playerCode]);

  // 레벨 선택 화면의 버튼 클릭 핸들러 수정
  const handleLevelSelect = (level) => {
    setCurrentLevel(level.id);
    setShowLevelSelect(false);
    setPlayerCode(INITIAL_PLAYER_CODE); // 코드 초기화
    playerPosRef.current = { ...level.playerStart };
  };

  return (
    <div className="game-container">
      {showLevelSelect ? (
        renderLevelSelect()
      ) : (
        <div className="game-layout">
          <div className="game-area">
            <canvas ref={canvasRef} width={800} height={600} />
          </div>
          <div className="code-editor">
            <h3>플레이어 코드 수정</h3>
            <div className="code-help">
              <p>사용 가능한 속성:</p>
              <ul>
                <li>speed: 이동 속도</li>
                <li>size: 플레이어 크기</li>
                <li>color: 플레이어 색상</li>
                <li>x: X 좌표</li>
                <li>y: Y 좌표</li>
                <li>jumpPower: 점프력</li>
                <li>gravity: 중력</li>
                <li>bounce: 튕김 정도</li>
                <li>trail: 이동 궤적</li>
                <li>trailColor: 궤적 색상</li>
                <li>shape: 'rect' 또는 'circle'</li>
                <li>invincible: ��적 모드</li>
              </ul>
            </div>
            <textarea
              value={playerCode}
              onChange={(e) => {
                setPlayerCode(e.target.value);
                const config = executePlayerCode(e.target.value);
                if (config) {
                  playerPosRef.current = { x: config.x, y: config.y };
                  setCodeError('');
                }
              }}
              rows={10}
              spellCheck={false}
            />
            {codeError && <div className="error-message">{codeError}</div>}
            <button 
              className="level-menu-btn"
              onClick={() => setShowLevelSelect(true)}
            >
              레벨 선택으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game; 