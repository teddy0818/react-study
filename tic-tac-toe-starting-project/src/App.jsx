import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// 헬퍼 function 생성 - 컴포넌트 상태나 데이터에 접근 x
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  // activePlayer - 활성화 된 플레이어
  const activePlayer = deriveActivePlayer(gameTurns);

  // gameBoard - 게임판 업데이트
  // 깊은 복사 사용해야함
  // let gameBoard = initialGameBoard;
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  console.log(gameBoard);
  console.log(initialGameBoard);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // 승리 조건
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  // 무승부
  const hasDraw = gameTurns.length == 9 && !winner;

  // 게임판 클릭 함수
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // 다른 상태를 병합하지 않도록 새로운 변수 생성
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  // Restart 버튼 함수
  function handleRestart() {
    // setGameTurns(() => {
    //   const updatedTurns = [];
    //   return updatedTurns;
    // });
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onClickRestartBtn={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
