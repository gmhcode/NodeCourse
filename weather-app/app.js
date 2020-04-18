const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const print = console.log

const address = process.argv[2]

if (!address) {
  console.log('Please Provide an address')
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error)
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(data.location)
      console.log('Data: ', forecastData)
    })
  })
}

// const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=37.8267,-122.4233&units=f'

// // mapBox pk.eyJ1IjoiZ3JlZ2h1Z2hlczk4OCIsImEiOiJjazk0azlldWUwZHcyM21tc29wdTUwMTN2In0.Uk4uumEZwA6l7X8n1z0esQ
