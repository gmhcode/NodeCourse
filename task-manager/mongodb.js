//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.getTimestamp())

//Connect to local mongoDB server
//READ 
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database')
  }
  const db = client.db(databaseName)
  //Finds only one with the _id of whatever
  // db.collection('users').findOne({ _id: new ObjectID("5ea1c7de639caf2ff456636e") }, (error, user) => {
  //   if (error) {
  //     console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })
  // db.collection('users').find({ age: 27 }).count((error, count) => {
  //   console.log(count)
  // })


  db.collection('tasks').findOne({ _id: new ObjectID("5ea0e21509046b382434f2ea") }, (error, tasks) => {
    console.log(tasks)
  })
  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })

})



















// To start the mongodb server
// c: \Users\greg\mongodb\bin\mongod.exe--dbpath =\Users\greg\mongodb - data
//CREATE 
//INSERT INTO MONGODB
// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//   if (error) {
//     return console.log('unable to connect to database')
//   }
//   const db = client.db(databaseName)
//   db.collection('users').insertOne({
//     _id: id,
//     name: 'Vikrum',
//     age: 26
//   }, (error, result) => {
//     if (error) {
//       return console.log('Unable to insert user')
//     }
//     //if the write was successfil this will print the object that was saves
//     console.log(result.ops)

//   })
//   db.collection('users').insertMany([
//     {
//       name: 'Jen',
//       age: 28
//     }, {
//       name: 'Gunther',
//       age: 27
//     }
//   ], (error, result) => {
//     if (error) {
//       return console.log('Unable to insert documents')
//     }
//     console.log(result.ops)
//   })


//   db.collection('tasks').insertMany([
//     {
//       desctription: 'Clean the house',
//       completed: true
//     }, {
//       desctription: 'renew inspection',
//       completed: false
//     }, {
//       desctription: 'Plant Pots',
//       completed: false
//     }
//   ], (error, result) => {
//     if (error) {
//       return console.log('unable to insert tasks')
//     }
//     console.log(result.ops)
//   })

// })