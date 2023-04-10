const express  = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());

const io =  new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173", // Remove the trailing slash here
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

server.listen(5174, () => {
    console.log("SERVER IS RUNNING at port 5174");
});
