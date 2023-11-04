import { io } from "../socketio";

import { addPlayer, refreshPlayer } from "./connectionClientController";
import { removePlayer } from "./disconnectionClientController";

io.on("connection", (socket) => {
  console.log(`${socket.id} conectado.`);

  const name = `Player_${socket.id.substring(0, 5)}`;
  addPlayer({ id: socket.id, name });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });

    refreshPlayer();
  })

});
