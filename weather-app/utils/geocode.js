const request = require('request')

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
module.exports = geocode