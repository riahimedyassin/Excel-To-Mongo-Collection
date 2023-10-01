const mongoose=require('mongoose')


const fieldSchema = mongoose.Schema({
    first_name: {
        type:String,
        required:[true,"First Name is a required filed"]
    }, 
    last_name: {
        type:String,
        required:[true,"Last Name is a required filed"]
    }, 
    company_name: {
        type: String
    },
    address: {
        type:String
    },
    city: {
        type:String
    },
    county: {
        type:String
    },
    postal: {
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
    web: {
        type:String
    }
})

module.exports=mongoose.model("Field",fieldSchema)