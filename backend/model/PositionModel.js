const {model, default: mongoose} = require('mongoose');

const {PositionsSchema} = require("../Schema/PositionsSchema");


const PositionsModel = new model("Positions" ,PositionsSchema);

module.exports = {PositionsModel}