//Will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const chalk = require('chalk')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())

// router.use(bodyParser.urlencoded({ extended: false }))

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'b5dbc53232cbaf',
    password: 'f110dc37',
    database: 'heroku_2fa6c992d6d1e2b'
})

function getConnection() {
    return pool
}


router.get('/messages', (req, res) => {
    console.log("Show some messages or whatever...")
    res.end()
})

router.get("/users", (req, res) => {
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



router.post('/user_create', (req, res) => {
    console.log("Trying To create a new user")
    console.log("How do we get the form data")

    const firstName = req.body.firstName
    const lastName = req.body.lastName

    console.log(req.body)
    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"

    getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " + err)
            res.sendStatus(500)
            return
        }
        res.send("got it")
        console.log("Inserted a new user with id: ", results.insertId)
        res.end()
    })

})




router.get('/user/:id', (req, res) => {
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

module.exports = router