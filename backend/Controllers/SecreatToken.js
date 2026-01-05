require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports.createSecreteToken= (id) =>{
    console.log("JWT_SECRET" , process.env.JWT_SECRET)
    return jwt.sign({id} , process.env.JWT_SECRET,{
        expiresIn: 3*24*60*60,
    });

};


