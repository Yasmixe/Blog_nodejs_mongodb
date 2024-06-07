const mongoose = require('mongoose');
const connectDb = async()=>{ 
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.mongodb_url);
        console.log('data base connected');
    }catch(error){
        console.log('error');
    }
}                           

module.exports = connectDb;