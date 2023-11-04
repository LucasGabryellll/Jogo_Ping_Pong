import { httpServer } from "./http";
import dotenv from "dotenv";

import "./controller/websocket";

dotenv.config();

const portServer = process.env.PORT_SERVER;

httpServer.listen(portServer, () => console.log(`Server is running in localhost:${portServer}`))