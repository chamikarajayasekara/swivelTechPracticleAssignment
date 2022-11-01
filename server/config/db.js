const mongoose = require("mongoose");

let user = process.env.USER_ID;
let key = process.env.USER_KEY;
let url =  `mongodb+srv://${user}:${key}@cluster0.2xxx9es.mongodb.net/practics_test?retryWrites=true&w=majority`;

async function  connectDB() {
    try{
        const conn = await  mongoose.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(()=>{
                console.log("DB connected")
            }).catch(err=>{
                console.log("DB not connected "+ err)
            })
    }catch (err) {
        console.log("DB not connected "+ err)
        console.error(err);
        process.exit(1)
    }

}
module.exports = connectDB