const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('./public'))

app.use(morgan('short'))

app.post('/user_create', (req, res) => {
  console.log("Trying To create a new user")
  console.log("How do we get the form data")

  const firstName = req.body.create_first_name
  const lastName = req.body.create_last_name
  const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
  getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new user: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new user with id: ", results.insertId)
    res.end
  })

})


function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'lbta_mysql_fixed'
  })
}

app.get('/user/:id', (req, res) => {
  console.log('Fething user with id: ' + req.params.id)

  const connection = getConnection()

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
  const connection = getConnection()
  const queryString = "SELECT * FROM users"
  connection.query(queryString, (err, rows, fields) => {

    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
    console.log("I think we fetched users successfully")


    res.json(rows)
  })

})

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