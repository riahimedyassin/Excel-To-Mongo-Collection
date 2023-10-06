const FeuilledecalculsanstitreSchema = require("../models/Feuilledecalculsanstitre.model")

const uploadToDB=async(data,feuille) => {
    let brutte = data 
    if(feuille) brutte = data[feuille] ; 
    
    for(let i =0;i<brutte.length;i++) {
        await FeuilledecalculsanstitreSchema.create(brutte[i])
    }
}

module.exports={uploadToDB}