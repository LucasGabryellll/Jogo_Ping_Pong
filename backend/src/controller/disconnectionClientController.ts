import { clients, PlayerProps } from "../model";

const removePlayer = ({ id }: PlayerProps) => {
  const player = clients.players.findIndex((value) => value.id === id);

  if (player !== -1) {
    clients.players.splice(player, 1);
    console.log(`${player}: desconectado.`);
  }
} 

export { removePlayer }