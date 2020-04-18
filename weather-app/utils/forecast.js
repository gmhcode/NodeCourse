const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=' + longitude + ',' + latitude + '&units=f'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log(error)
      callback("unable to connect", undefined)
    } else if (response.body.error) {
      callback('cannot find location', undefined)
    } else {
      callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' out.')
    }
  })

}

module.exports = forecast