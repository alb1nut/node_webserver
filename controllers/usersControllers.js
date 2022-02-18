const req = require("express/lib/request");
const res = require("express/lib/response");
const usersModel =require("../models/usersModels");

const addUser =(req,res) => {
  try{
      await usersModel.create(req.body);
      res.status(200).json({success:true, message : "New user is added successfully"});
  }catch(error){
res.status(400).json({success:false,message:error.message})
  }
    //  usersModel.create(req.body);
}

const getAllUsers =(req,res) => {}

const deleteUserById =(req,res) => {}

const getUserById =(req,res) => {}

const updateUserById =(req,res) => {}



module.exports= { 
    addUser,
    getAllUsers,
    deleteUserById,
   getUserById,
    updateUserById
}