import { useEffect, useState } from "react";
import { fetchGame } from "./api";

// Part 1:
// TO DO: Load game state based on API response
// TO GET: get game data: -> which is Game state??
// TO DISPLAY / RETURN: Display loading state & then Attempts count, specifically maxAttempts initially
// DEPENDING ON: Successful data fetchGame api response
// FROM: fetchGame api
// DATA PATH: Game state -> game api -> Game Attempt

export default function App() {
  // You may add/change state as needed.
  const [game, setGame] = useState({});
  const [gameLoaded, setGameLoaded] = useState(false);

  const loadGame = async () => {
    try {
      const response = await fetchGame();

      if (!response.ok) {
        throw new Error(`response failed ${response.status}`);
      }

      const result = await response.json();

      const gameData = result.data;

      setGame(gameData.game);
      console.log(gameData);
      if (gameData !== null) {
        setGameLoaded(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // TODO: Load the game configuration.
    loadGame();
  }, []);

  return (
    <main>
      <h1>Five Letter Guess</h1>
      <div className="game_loaded_card">
        {gameLoaded ? (
          <div className="Attempt_card">
            <h2>Attempst remaining: {game.rules.maxAttempts}</h2>
          </div>
        ) : (
          <div className="ga">
            <h2>Loading game...</h2>
          </div>
        )}
      </div>
      {/* Build the required UI here. */}
    </main>
  );
}
