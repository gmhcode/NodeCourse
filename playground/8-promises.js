const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 
    reject('Things went wrong!')
    resolve([2, 3, 2])
  }, 2000);
})
//when resolve is called, .then() is called
doWorkPromise.then((result) => {
  console.log('Success', result)
}).catch((error) => {
  console.log('error!', error)
})

