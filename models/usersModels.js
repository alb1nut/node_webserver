const mongoose =require("mongoose");

const usersSchema = mongoose.Schema({

    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type: String
    },
    phone_number:{
        type: String
    },

})


const usersModel = mongoose.model("user",usersSchema);
module.export=usersModel;