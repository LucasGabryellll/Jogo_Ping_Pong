import { io } from "../socketio";

import { clients, AddPlayerProps } from "../model";

function refreshPlayer() {
  io.emit('player_refresh', clients.players);
}

const addPlayer = ({ id, name }: AddPlayerProps) => {
  clients.players.push({ id: id, name });

  refreshPlayer();
}

export { refreshPlayer, addPlayer }