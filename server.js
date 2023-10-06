require("dotenv").config()
const express = require('express');
const connect_db = require("./config/config");
const app= express(); 
const multer = require('multer')
const fs= require("fs-extra")

const PORT= process.env.PORT
const CONNECTION_STRING=process.env.CONNECTION_STRING

const uploadFile= require('./router/uploadFile.router')

const upload = multer({dest:"uploads/"})


const start = async() => {
    try {
        connect_db(CONNECTION_STRING)
    } catch (error) {
        return console.log(error)
    }
    app.listen(PORT, () => {
        console.log(`App running on port : ${PORT}`)
    })
}
app.use('/uplaod',upload.single('file'), uploadFile)



start()


