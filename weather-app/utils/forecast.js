const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=' + longitude + ',' + latitude + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log(error)
      callback("unable to connect", undefined)
    } else if (body.error) {
      callback('cannot find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' out.')
    }
  })

}

module.exports = forecast