const express=require('express')
const bodyparser=require('body-parser')
const router=require('./routes')
const db=require('./dbs')
const app=express()
const cors=require('cors')


app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.static(`${__dirname}/upload`));

app.use('/',router)

app.listen(3000) 