const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//Define paths for express the 'Serve'
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//Setup Handlebars engine
app.set('view engine', 'hbs')
//Tells express to use the templates folder
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Tells the server to use the html page
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Greg Hughes'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'HelpText',
    title: 'Help',
    name: 'Greg Hughes'
  })
})

app.get('/about', (req, res) => {

  res.render('about', {
    title: 'About Me',
    name: 'Greg Hughes'
  })
})


app.get('/weather', (req, res) => {
  res.send({
    forecast: 'forecast',
    location: 'location'
  })
})

app.get('*', (req, res) => {
  res.send('My 404 page')
})

app.listen(3000, () => {
  console.log('server is up on prt 3000.')
})
