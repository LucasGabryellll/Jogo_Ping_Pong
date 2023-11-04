interface Client {
  players: {
    id: string;
    name: string;
  }[]
}

const clients: Client = {
  players: []
}

export { clients }