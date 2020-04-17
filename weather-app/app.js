const request = require('request')
const print = console.log

const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
  print(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out.')
})

//c8fd46374a5538fe8d673476f756e76b
