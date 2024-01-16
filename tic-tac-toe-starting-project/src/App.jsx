import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="O"></Player>
          <Player name="Player 2" symbol="X"></Player>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
