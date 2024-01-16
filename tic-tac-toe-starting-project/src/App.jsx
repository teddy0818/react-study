import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="Player 1" symbol="O"></Player>
          <Player initName="Player 2" symbol="X"></Player>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
