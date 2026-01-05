const User = require("../Schema/UserSchema");

const {createSecreteToken} = require("./SecreatToken");

const bcrypt =  require("bcrypt");

module.exports.SignUp = async(req,res , next)=>{

    try{
        const {email, username,password, createdAt} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({ message: "User Alreday exists"})
        }
        const user = await User.create({email, username , password , createdAt});
        const Token  = createSecreteToken(user._id);
        res.cookie("token" , Token,{
           httpOnly: true,
           sameSite:'lax'
        });
        res.status(201).json({message: "User signed in successfully " , success: true , user});
        next();
    } catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
    
};

module.exports.Login = async(req,res,next)=>{
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.json({message:"All field are required"});

        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({message:"Incorrect password or email"})
        }
        const auth = await bcrypt.compare(password,user.password);

        if(!auth){
            return res.json({message: "INcorrect password or email"})

        }

        const Token = createSecreteToken(user._id);
        res.cookie("token" , Token,{
            withCredentials: true,
            httpOnly: false ,
        });

        res.status(201).json({message: "User logged in successfully" , success: true})
        next();
    }catch(error){
        console.log(error)
    }
}