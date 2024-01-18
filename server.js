const express = require("express");
const articalsRouter = require('./routes/articles')
const Article = require('./models/article')
const mongoose   = require("mongoose");
const methodOverride = require('method-override')

const app=express()

mongoose.connect('mongodb://0.0.0.0/Database');


app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req,res)=>{
    const articles = await Article.find().sort({createdAt:'desc'})
    res.render('articles/index',{articles:articles})
})


app.use('/articles',articalsRouter)

app.listen(3000)