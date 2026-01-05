const {model} = require("mongoose") ;

const {OrderSchema} = require("../Schema/OrderSchema")

const OrderModels = new model ("ordermodel" , OrderSchema);


module.exports ={OrderModels}