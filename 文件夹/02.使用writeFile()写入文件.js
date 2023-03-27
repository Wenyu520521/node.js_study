const fs = require('fs')
fs.writeFile('./files/11.txt', 'zxlml', function (err) {
  if (err) {
    return console.log(err)
  }
})
