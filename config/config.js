const mongoose = require("mongoose")


const connect_db=(connection_string) => {
    try {
        const connect = mongoose.connect(connection_string) 
        if(connect) console.log("Connected Successfully to DB")
    } catch (error) {
        throw new Error("Connection to DB failed")
    }
}

module.exports=connect_db