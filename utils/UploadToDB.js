const FeuilledecalculsanstitreSchema = require("../models/Feuilledecalculsanstitre.model")

const uploadToDB=async(data) => {
    let brutte = data 

    for(let i =0;i<brutte.length;i++) {
        await FeuilledecalculsanstitreSchema.create(brutte[i])
    }
}

module.exports={uploadToDB}