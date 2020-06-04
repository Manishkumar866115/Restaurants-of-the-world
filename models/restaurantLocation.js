
const mongoose=require("mongoose");

const restaurantLattitudeSchema=mongoose.Schema({
    restaurantID : { type : Number , required : false },
    countryCode:{ type : Number , required : false },
    city: {type : String , required : false },
    address : {type : String, required : false },
    locality: {type : String, required : false },
    localityVerbose: {type : String, required : false },
    longitude:{ type: Number, required : false },
    latitude:{type: Number, required : false }
})

const restaurantLocation= module.exports = mongoose.model('restaurantLocation',restaurantLattitudeSchema);