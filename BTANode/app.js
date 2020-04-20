const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOOT")
})


app.get("/users", (req, res) => {
  var user1 = { firstName: "Greg", lastName: "Hughes" }
  const user2 = { firstName: "Kevin", lastName: "Durant" }
  res.json([user1, user2])

})

app.listen(3003, () => {
  console.log("Server is up and listening on 3003....")
})
