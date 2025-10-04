import express from "express";
const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", (socket: any) => {
  console.log("a user connected");
});

server.listen(8000, () => {
  console.log("listening on :8000");
});
