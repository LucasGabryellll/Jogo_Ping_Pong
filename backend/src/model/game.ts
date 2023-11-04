interface Game {
  players: {
    id: string;
    name: string;
  }[]
}

const game: Game = {
  players: []
}

export { game }