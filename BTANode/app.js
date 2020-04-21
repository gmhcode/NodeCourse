const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql')

const bodyParser =

  app.use(express.static('./public'))

app.use(morgan('short'))

app.post('/user_create', (req, res) => {
  console.log("Trying To create a new user")
  console.log("How do we get the form data")
  res.end()
})

app.get('/user/:id', (req, res) => {
  console.log('Fething user with id: ' + req.params.id)

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'lbta_mysql_fixed'
  })

  const userID = req.params.id
  const queryString = "SELECT * FROM users WHERE id = ?"

  connection.query(queryString, [userID], (err, rows, fields) => {

    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
    console.log("I think we fetched users successfully")

    const users = rows.map((row) => {
      return { firstName: row.first_name, lastName: row.last_name }
    })
    res.json(users)
  })
})

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOOT")
})

// http://192.168.1.8/
app.get("/users", (req, res) => {
  var user1 = { firstName: "Greg", lastName: "Hughes" }
  const user2 = { firstName: "Kevin", lastName: "Durant" }
  res.json([user1, user2])

})

// app.listen(3003, '0.0.0.0',() => {
//   console.log("Server is up and listening on 3003....")
// })

app.listen(3003, '0.0.0.0', () => {
  console.log("Server is up and listening on 3003....")
})




// SELECT * FROM users

// INSERT INTO users (first_name, last_name) VALUES ("Brian", "Voong")

// DELETE FROM users WHERE id = 1

// UPDATE users SET first_name = "Stephen" WHERE id = 2