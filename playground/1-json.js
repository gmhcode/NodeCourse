const book = {
  title: 'Harry Potter',
  author: 'J.K. Rowling'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)