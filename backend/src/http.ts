import express from "express";
import http from "http";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  methods: ['GET']
}));

const httpServer = http.createServer(app);

export { httpServer }