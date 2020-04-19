const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOOT")
})


app.listen(3003, () => {
  console.log("Server is up and listening")
})
