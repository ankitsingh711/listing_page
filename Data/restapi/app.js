let express = require('express')
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 2127;
const mongoUrl = process.env.mongoLiveUrl;


app.get('/',(req,res) => {
    res.send('Welcome to Expres')
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantmenu',(req,res) => {
    db.collection('restaurantmenu').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantdata/:id',(req,res) => {
    // let id = req.params.id; 
    // let id = req.query.id 
    // console.log('>>>id',id) 
    let query = {};
    let stateId = req.query.state_id;
    let mealId = req.query.meal_id;
    if(stateId){
        query = {state_id:stateId}
    }else if(mealId){
        query={'mealTypes.mealType_id':mealId}
    }

    db.collection('restaurantdata').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect.mongoUrl, (err,client) => {
    if (err) console.log(`Error While Connecting`)
    db = client.db('zomatodata');
    app.listen(port,() => {
    console.log(`Server is running on the port ${port}`)

    })
}
