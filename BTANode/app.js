const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql')
const router = require('./routes/user.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))
app.use(router)
app.use(morgan('short'))

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOOT")
})









// http://192.168.1.8/


// app.listen(3003, '0.0.0.0',() => {
//   console.log("Server is up and listening on 3003....")
// })

app.listen(3003, () => {
  console.log("Server is up and listening on 3003....")
})




// SELECT * FROM users

// INSERT INTO users (first_name, last_name) VALUES ("Brian", "Voong")

// DELETE FROM users WHERE id = 1

// UPDATE users SET first_name = "Stephen" WHERE id = 2