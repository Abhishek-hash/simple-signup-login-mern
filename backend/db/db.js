const mongoose = require('mongoose')
const mongoDbUri = 'mongodb://localhost:27017/config';

const mongoDB = async() => {
    
    try {
        const mongooseConn = await mongoose.connect(mongoDbUri);
        if(mongooseConn) console.log('connected to db...')
     
    }
    catch(error) {
        console.log(error.message)
    }
}

module.exports = mongoDB;