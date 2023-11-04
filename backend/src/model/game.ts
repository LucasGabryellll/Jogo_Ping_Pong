interface Game {
  players: {
    id: string;
    name: string;
  }[]
}

export const game: Game = {
  players: []
}