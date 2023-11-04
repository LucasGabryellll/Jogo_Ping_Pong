import { io } from "../socketio";

io.on("connection", (socket) => {
  console.log(`${socket.id} conectado.`);
});