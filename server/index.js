const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

let pet_list = [];

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    /** Send the initial pet_list data to the connected client */
    socket.emit("pet_list_updated", pet_list);

    /** Listen for pet_list_updates event */
    socket.on("pet_list_updates", (updated_pet_list) => {
        /** Update the pet_list data */
        pet_list = [...updated_pet_list];
        /** Broadcast the updated pet_list data to all connected clients */
        io.emit("pet_list_updated", pet_list);
    });

    socket.on("adopt_pet", pet_id => {
        pet_list.filter(pet => pet.id !== pet_id);
        io.emit("adopted_pet", pet_id);
    });

    socket.on("like_pet", pet_id => {
        pet_list.map(pet => {
            if(pet.id === pet_id){
                return {
                    ...pet,
                    like: true
                }
            }
        });
        io.emit("liked_pet", pet_id);
    }); 

});

server.listen(5174, () => {
    console.log("SERVER IS RUNNING at port 5174");
});
