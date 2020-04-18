const path = require('path')
const express = require('express')


//Goes to the public directory
const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

//Tells the server to use the html page
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Greg',
//     age: 31
//   })
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>')
// })
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'forecast',
    location: 'location'
  })
})


app.listen(3000, () => {
  console.log('server is up on prt 3000.')
})
