const mongoose=require('mongoose') 
const fieldSchema = mongoose.Schema({first_name : {type:string}, 
address : {type:string}, 
county : {type:string}, 
postal : {type:string}, 
phone : {type:string}, 
city : {type:string}, 
web : {type:string}, 
last_name : {type:string}, 
company_name : {type:string}, 
email : {type:string}, 
}) 
module.exports=mongoose.model(test,testSchema)