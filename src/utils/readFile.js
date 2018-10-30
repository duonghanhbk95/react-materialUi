const fs = require('fs')

export const readJSON = (fileName) => {
  fs.readFile(fileName, (err, data) => {
    debugger
    if (err) throw err
    let jsonObject = JSON.parse(data)
    console.log('jsonObject', jsonObject)
  })
}