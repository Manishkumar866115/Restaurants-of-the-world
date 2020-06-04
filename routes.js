
const express=require("express");
const router=express.Router();

const restaurants = require('./models/restaurant');
const restaurantLocation=require('./models/restaurantLocation');

router.get('/restaurants',(req,res)=>{

    var query=restaurants.find({},(err,result)=>{
        res.send(result);
    });
})

router.get('/restaurant-locations',(req,res)=>{
    var query=restaurantLocation.find({});
    query.select('longitude latitude -_id');
    query.exec((err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

router.get('/restaurant-locations/:id', (req,res)=>{
    var query=restaurantLocation.find( { restaurantID: req.params.id});
    query.select('longitude latitude -_id');
    query.exec( (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

router.get('/restaurants/api/:id',(req,res)=>{
    var query=restaurants.findOne({ "restaurantName" : req.params.id});
    query.exec((err,result)=>{
        if(err){ 
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

router.get('/restaurants/api/filter/ratings-dsc',(req,res)=>{
    var query= restaurants.find().sort({'aggregateRating': -1});
    query.exec((err,result)=>{
        res.send(result);
    });

})

router.get('/restaurants/api/filter/ratings-inc',(req,res)=>{
    var query= restaurants.find().sort({'aggregateRating': 1});
    query.exec((err,result)=>{
        res.send(result);
    });

})

router.get('/restaurants/api/filter/votes-dsc',(req,res)=>{
    var query= restaurants.find().sort({'votes': -1})
    query.exec((err,result)=>{
        res.send(result);
    });
})

router.get('/restaurants/api/filter/votes-inc',(req,res)=>{
    var query= restaurants.find().sort({'votes': 1})
    query.exec((err,result)=>{
        res.send(result);
    });
})

router.get('/restaurants/api/filter/average-cost-for-two-dsc',(req,res)=>{
    var query= restaurants.find().sort({'averageCostForTwo': -1});
    query.exec((err,result)=>{
        res.send(result);
    });
})

router.get('/restaurants/api/filter/average-cost-for-two-inc',(req,res)=>{
    var query= restaurants.find().sort({'averageCostForTwo': 1});
    query.exec((err,result)=>{
        res.send(result);
    });
})
module.exports =router ;
