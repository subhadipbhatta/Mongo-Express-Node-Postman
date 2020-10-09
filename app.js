const express = require ('express');
const mongoose = require ('mongoose');
//const alienRouter = require ('./routes/Aliens')

const url = 'mongodb://localhost/TestDB'
const app = express();

mongoose.connect(url,{useNewUrlparser:true})
const con = mongoose.connection


con.on('open',function(){
	console.log("connected.....")
})

app.use(express.json())

const alienRouter = require('./routes/Aliens')
app.use('/Aliens',alienRouter)

app.listen(8080, () => {
    console.log('Server started')
})