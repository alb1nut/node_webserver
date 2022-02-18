const express = require("express");

const mongoose = require("mongoose");
const usersController =require("./controllers/usersControllers")



mongoose.connect("mongodb+srv://al_dov:0203754879@cluster0.fc4i8.mongodb.net/rentease?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB is connected");
})
.catch((error)=>{ 
    console.log("DB is connected: ", error.message);

});

const server =express();

server.use(express.json()); //to allow us to receive our clients info

// server.use("/users", usersRoutes);

server.post("/users ", usersController.addUser);
server.get("/users ", usersController.getAllUsers );
server.delete("/users ", usersController.deleteUserById);
server.put("/users/:id ", usersController.updateUserById);
server.get("/users/: id ", usersController.getUserById);

server.listen(3001);


