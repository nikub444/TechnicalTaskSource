import React, { useState, useRef, useEffect } from "react";
import "./Snake.styles.css";
import Apple from "../../images/apple.png";
import GameBoy from "../../images/gameboy.png";
import useInterval from "./useInterval";
import ArrowIcon from "./Arrow.png";

const canvasX: number = 1000;
const canvasY: number = 1000;
const initialSnake: Array<number[]> = [
  [4, 10],
  [4, 10],
];
const initialApple: Array<number> = [14, 10];
const scale: number = 50;
const timeDelay: number = 100;

const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const myRef = useRef<HTMLDivElement | null>(null);
  const [newScoreClass, setNewScoreClass] = useState<string>("");
  const [modalClass, setModalClass] = useState<string>("");
  const [hideClass, setHideClass] = useState<string>("");
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState<number[]>([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useInterval(() => runGame(), delay);

  useEffect(() => {
    let fruit = document.getElementById("fruit") as HTMLCanvasElement;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#a3d001";
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1);
      }
    }
  }, [snake, apple, gameOver]);
  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(myRef);

  function play(): void {
    setHideClass("unhide");
    setModalClass("arrowModal");
    executeScroll();
    document.body.style.overflow = "hidden";
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  function handleSetScore(): void {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function checkCollision(head: number[]): boolean {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }

  function appleAte(newSnake: number[][]): boolean {
    let coord = apple.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord;
      setScore(score + 1);
      setApple(newApple);
      return true;
    }
    return false;
  }

  function runGame(): void {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>): void {
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  }

  let changeView = (): void => {
    let intViewportHeight = window.innerHeight;
    window.scrollBy(0, intViewportHeight);
    document.body.style.overflow = "visible";
  };
  useEffect(() => {
    score === 0 ? setNewScoreClass("") : setNewScoreClass("newScore");
    const timer = setTimeout(() => {
      setNewScoreClass("");
    }, 1000);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div onKeyDown={(e) => changeDirection(e)} className="wrap" ref={myRef}>
      <div className={`hid ${modalClass}`}>Use arrows to play!</div>
      <div className={`hid ${hideClass}`}>
        <img id="fruit" src={Apple} alt="fruit" width="30" />
        <img src={GameBoy} alt="gameboy" className="gameboy" />
        <canvas
          className="playArea"
          ref={canvasRef}
          width={`${canvasX}px`}
          height={`${canvasY}px`}
        />
        {gameOver && <div className="gameOver">Game Over</div>}

        <div className={`scoreBox ${newScoreClass}`}>
          <h2>Score: {score}</h2>
          <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
        </div>
      </div>

      <button onClick={play} className="playButton">
        Play
      </button>
      <button className="funButton" onClick={changeView}>
        Let's explore World!
        <img src={ArrowIcon} alt="arrow icon" style={{ height: 15 }} />
      </button>
    </div>
  );
};

export default Snake;
