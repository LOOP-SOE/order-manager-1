const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require("express-validator")

const app = express()
const port = 5000

const urlendcodeParser = bodyParser.urlencoded({ extended: false})

//Navigation
app.set('view engine','ejs')

app.get('',(req,res)=> {
    res.render('index')
})

app.get('/register',(req, res)=> {
    res.render('register')
})

app.listen(part, ()=>console.info("App listening on port: ${port}"))