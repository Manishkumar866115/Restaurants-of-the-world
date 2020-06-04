
const mongoose=require("mongoose");

const restaurantSchema=mongoose.Schema({
    restaurantID : { type : Number , required : false },
    restaurantName:{ type : String , required : false},
    cuisines: {type : String , required : false},
    averageCostForTwo : {type : Number , required : false},
    currency: {type : String , required : false},
    hasTableBooking: {type : String , required : false},
    hasOnlineDelivery: {type : String, required : false},
    aggregateRating : {type : Number, required : false},
    ratingColor: {type : String, required : false},
    ratingText : {type : String, required : false},
    votes : {type : Number, required : false}
})

const restaurants= module.exports = mongoose.model('restaurants',restaurantSchema);