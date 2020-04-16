const fs = require('fs')

const readFile = fs.readFileSync('1-json.json')
const dataJSON = readFile.toString()
const data = JSON.parse(dataJSON)

console.log(data.name)

function challenge (data) {
  data.name = 'Greg'
  data.planet = 'Earth'
  data.age = 31

  return data
}

const stringedData = JSON.stringify(challenge(data))
fs.writeFileSync('1-json.json',stringedData)

console.log(challenge(data).name)