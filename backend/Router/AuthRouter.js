const { SignUp , Login  }=  require("../Controllers/AutheController.js");
const {userVerification} = require("../Controllers/AuthMiddleware.js")
const express = require("express")
const router = express.Router();

router.post("/signup" , SignUp)
router.post("/login" , Login)

router.post ("/" , userVerification )


module.exports = router;