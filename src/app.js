const express = require('express')
require("./db/connection")
const app = express()
const port = process.env.PORT || 8000

app.get('/', function (req, res) {
  res.send(`connection is setup at ${port}`)
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})