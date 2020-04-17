const request = require('request')
const print = console.log

// const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=37.8267,-122.4233&units=f'



// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     print('unable to connect to weather service')
//   } else if (response.body.error) {
//     print('unable to find location')
//   } else {
//     print(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out.')
//   }
// })


// const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZ3JlZ2h1Z2hlczk4OCIsImEiOiJjazk0azlldWUwZHcyM21tc29wdTUwMTN2In0.Uk4uumEZwA6l7X8n1z0esQ"
// //c8fd46374a5538fe8d673476f756e76b
// request({ url: geoUrl, json: true }, (error, response) => {
//   if (error) {
//     print('unable to connect to weather service')
//   } else if (response.body.features.length === 0) {
//     print('unable to find location, try another search')
//   } else {
//     print(response.body.features[0].center)
//   }
// })

// // mapBox pk.eyJ1IjoiZ3JlZ2h1Z2hlczk4OCIsImEiOiJjazk0azlldWUwZHcyM21tc29wdTUwMTN2In0.Uk4uumEZwA6l7X8n1z0esQ

const geocode = (address, callback) => {

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ3JlZ2h1Z2hlczk4OCIsImEiOiJjazk0azlldWUwZHcyM21tc29wdTUwMTN2In0.Uk4uumEZwA6l7X8n1z0esQ'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find to location, try another search', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}
geocode('New York', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})