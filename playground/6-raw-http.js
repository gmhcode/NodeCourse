const https = require('http')
const url = 'http://api.weatherstack.com/current?access_key=c8fd46374a5538fe8d673476f756e76b&query=40,-75&units=f'

const request = https.request(url, (response) => {
  let data = ''


  response.on('data', (chunk) => {
    data = data + chunk.toString()
    console.log(chunk)
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()