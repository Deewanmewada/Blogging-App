

const { default: mongoose } = require("mongoose");


function dbConfig(){
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
    })
    .then(() => {
        console.log("connected to DB Successfull!!")
    })
    .catch((err)=> {
        console.log("not able to connect with mongodb server...")
        console.log(err)
    });
}

module.exports = dbConfig;


