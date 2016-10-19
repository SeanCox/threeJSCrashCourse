const express = require('express')
const app = express()


app.use(express.static('public'))


const port = 1337
app.listen(port, ()=>{
  console.log(`three listening on ${port}`)
})
