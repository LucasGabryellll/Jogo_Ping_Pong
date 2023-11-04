import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  methods: ['GET']
}));

const httpServer = http.createServer(app);

const io = new Server(httpServer);

export { httpServer, io }