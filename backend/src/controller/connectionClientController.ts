import { io } from "../socketio";

import { game, AddPlayerProps } from "../model";

function refreshPlayer() {
  io.emit('player_refresh', game.players);
}

const addPlayer = ({ id, name }: AddPlayerProps) => {
  game.players.push({ id: id, name });

  refreshPlayer();
}

export { refreshPlayer, addPlayer }