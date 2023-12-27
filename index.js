const express = require('express')
const app = express()

app.get('/',()=>{
  console.log('Hello world')
})

app.listen((3000),()=>{
  console.log('connect to port 3000')
})