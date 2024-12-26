export const levelData = [
  {
    id: 1,
    name: "속도의 시험",
    description: "speed: 15로 설정하고 빠르게 움직이는 장애물을 피하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 500 },
    requireExactConfig: {
      speed: 15
    },
    obstacles: [
      ...Array.from({ length: 4 }, (_, i) => ({
        x: 200 + i * 120,
        y: 300,
        width: 30,
        height: 30,
        speedX: 0,
        speedY: 3 + i
      })),
      { x: 300, y: 450, width: 200, height: 20 }
    ]
  },
  {
    id: 2,
    name: "무지개 도전",
    description: "color: 'rainbow'로 설정하고 움직이는 발판을 타고 가세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 200 },
    requireExactConfig: {
      color: 'rainbow'
    },
    obstacles: Array.from({ length: 5 }, (_, i) => ({
      x: 150 + i * 120,
      y: 400,
      width: 80,
      height: 20,
      speedX: (i % 2 === 0 ? 2 : -2),
      speedY: 0
    }))
  },
  {
    id: 3,
    name: "초강력 점프",
    description: "jumpPower: 20, gravity: 0.8로 설정하고 높이 점프하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 50 },
    requireExactConfig: {
      jumpPower: 20,
      gravity: 0.8
    },
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      ...Array.from({ length: 6 }, (_, i) => ({
        x: 100 + i * 120,
        y: 300 - Math.sin(i) * 100,
        width: 80,
        height: 20,
        speedX: 0,
        speedY: Math.cos(i) * 2
      }))
    ]
  },
  {
    id: 4,
    name: "미니 챌린지",
    description: "size: 8로 설정하고 좁은 통로를 통과하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 500 },
    requireExactConfig: {
      size: 8
    },
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      ...Array.from({ length: 20 }, (_, i) => ({
        x: 150 + i * 30,
        y: 0,
        width: 10,
        height: 520,
        gap: 15
      }))
    ]
  },
  {
    id: 5,
    name: "네온 레이스",
    description: "trail: true, speed: 12로 설정하고 제한시간 안에 도착하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 500 },
    timeLimit: 8,
    requireExactConfig: {
      trail: true,
      speed: 12
    },
    obstacles: Array.from({ length: 12 }, (_, i) => ({
      x: 150 + (i * 50),
      y: 300 + Math.sin(i) * 150,
      width: 20,
      height: 200
    }))
  },
  {
    id: 6,
    name: "탄성 마스터",
    description: "bounce: 1.5, size: 15로 설정하고 벽에서 튕겨 올라가세요!",
    playerStart: { x: 400, y: 500 },
    goal: { x: 400, y: 50 },
    requireExactConfig: {
      bounce: 1.5,
      size: 15
    },
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      { x: 300, y: 300, width: 200, height: 20 },
      { x: 100, y: 200, width: 200, height: 20 },
      { x: 500, y: 200, width: 200, height: 20 },
      ...Array.from({ length: 3 }, (_, i) => ({
        x: 350,
        y: 100 + i * 100,
        width: 30,
        height: 30,
        speedX: 4,
        speedY: 0
      }))
    ]
  },
  {
    id: 7,
    name: "원형 질주",
    description: "shape: 'circle', speed: 18로 설정하고 빠르게 통과하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 500 },
    requireExactConfig: {
      shape: 'circle',
      speed: 18
    },
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      ...Array.from({ length: 8 }, (_, i) => ({
        x: 200 + i * 60,
        y: 200,
        width: 40,
        height: 40,
        speedX: Math.cos(i) * 3,
        speedY: Math.sin(i) * 3
      }))
    ]
  },
  {
    id: 8,
    name: "무적 레이스",
    description: "invincible: true, speed: 8로 설정하고 제한시간 안에 도착하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 500 },
    timeLimit: 5,
    requireExactConfig: {
      invincible: true,
      speed: 8
    },
    obstacles: Array.from({ length: 40 }, (_, i) => ({
      x: 100 + (i % 8) * 80,
      y: 100 + Math.floor(i / 8) * 80,
      width: 40,
      height: 40,
      speedX: (i % 2 === 0 ? 2 : -2),
      speedY: (i % 3 === 0 ? 2 : -2)
    }))
  },
  {
    id: 9,
    name: "복합 도전",
    description: "jumpPower: 15, bounce: 0.8, size: 12로 설정하고 도전하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 100 },
    requireExactConfig: {
      jumpPower: 15,
      bounce: 0.8,
      size: 12
    },
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      ...Array.from({ length: 15 }, (_, i) => ({
        x: 150 + i * 40,
        y: 300 + Math.sin(i) * 100,
        width: 20,
        height: 200,
        speedX: 0,
        speedY: Math.cos(i)
      }))
    ]
  },
  {
    id: 10,
    name: "최종 시험",
    description: "모든 능력을 활용해 5초 안에 클리어하세요!",
    playerStart: { x: 50, y: 500 },
    goal: { x: 700, y: 50 },
    timeLimit: 5,
    obstacles: [
      { x: 0, y: 550, width: 800, height: 50 },
      ...Array.from({ length: 5 }, (_, i) => ({
        x: 150 + i * 120,
        y: 0,
        width: 20,
        height: 400
      })),
      ...Array.from({ length: 4 }, (_, i) => ({
        x: 200 + i * 120,
        y: 200,
        width: 40,
        height: 40,
        speedX: 3,
        speedY: 2 + i
      }))
    ],
    hint: "힌트: 작은 크기, 높은 점프력, 빠른 속도가 필요해요!"
  }
]; 