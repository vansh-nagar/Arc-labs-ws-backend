const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log("a user connected");

  socket.on("message", (data: any) => {
    console.log("Message from client: ", data);
    io.emit("message", `Server received: ${data}`);
  });

  socket.on("mousemove", (data: any) => {
    console.log("Mouse moved: ", data);
    io.emit("mousemove", data);
  });
});

server.listen(8000, () => {
  console.log("listening on :8000");
});
