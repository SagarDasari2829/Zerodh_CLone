const mongoose = require('mongoose')

const bcrypt  = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type: String ,
        required:[true , "Your email address is required"],
        unique: true,
    },
    username:{
        type: String,
        required: [true, "Your username is required"],

    },
    password:{
        type: String,
        required: [true , "Your password is required"]
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
});

userSchema.pre("save" , async function (){
    if(!this.isModified("password")) return;
    try{
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt .hash(this.password , salt);
        
    }catch(error){
        res.send(error.message)
    }
 

});

module.exports = mongoose.model("User" , userSchema)