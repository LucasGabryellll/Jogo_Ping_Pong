import { game, PlayerProps } from "../model";

const removePlayer = ({ id }: PlayerProps) => {
  const player = game.players.findIndex((value) => value.id === id);

  if (player !== -1) {
    game.players.splice(player, 1);
    console.log(`${player}: desconectado.`);
  }
} 

export { removePlayer }