//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//Connect to local mongoDB server
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database')
  }
  const db = client.db(databaseName)
  // db.collection('users').insertOne({
  //   name: 'Greg',
  //   age: 31
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //   //if the write was successfil this will print the object that was saves
  //   console.log(result.ops)

  // })
  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   }, {
  //     name: 'Gunther',
  //     age: 27
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result.ops)
  // })
  db.collection('tasks').insertMany([
    {
      desctription: 'Clean the house',
      completed: true
    }, {
      desctription: 'renew inspection',
      completed: false
    }, {
      desctription: 'Plant Pots',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('unable to insert tasks')
    }
    console.log(result.ops)
  })

})
// To start the mongodb server
// c: \Users\greg\mongodb\bin\mongod.exe--dbpath =\Users\greg\mongodb - data