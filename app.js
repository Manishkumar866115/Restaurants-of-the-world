
const express=require("Express");
const mongoose=require("mongoose");
const path=require("path");
const bosyParser=require("body-parser");
const cors=require("cors");
const csvtojson=require("csvtojson");

const app=express();
app.use(cors());

const route=require('./routes');

mongoose.connect("mongodb://localhost:27017/rest",{ useNewUrlParser: true });
mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDb @ port 27017");
    mongoose.connection.dropDatabase();
})
mongoose.connection.on("error",(err)=>{
    if(err){
        console.log(err);
    }
})

const restaurants=require('./models/restaurant');
const restaurantLocation=require('./models/restaurantLocation');
csvtojson({ noheader: false , headers : ['restaurantID','restaurantName','cuisines','averageCostForTwo','currency','hasTableBooking','hasOnlineDelivery','aggregateRating','ratingColor','ratingText','votes']})
    .fromFile("./restaurants.csv").then( jsonData => {
    restaurants.insertMany(jsonData);
});

csvtojson({ noheader: false , headers : ['restaurantID','countryCode','city','address','locality','localityVerbose','longitude','latitude']})
    .fromFile("./restaurantLocation.csv").then( jsonData => {
    restaurantLocation.insertMany(jsonData);
});

app.use('/',route);

const port=3000;
app.listen(port,()=>{
    console.log("Listening on the port :"+port);
});