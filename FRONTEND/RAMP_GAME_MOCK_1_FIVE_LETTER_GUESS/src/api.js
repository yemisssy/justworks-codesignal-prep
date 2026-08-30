const GAME_RESPONSE = {
  data: {
    game: {
      id: "daily-104",
      rules: {
        wordLength: 5,
        maxAttempts: 6
      },
      puzzle: {
        targetWord: "PLANT"
      }
    }
  }
};

export async function fetchGame() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: async () => GAME_RESPONSE
      });
    }, 25);
  });
}
