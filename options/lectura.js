const fs = require('fs')

function readme() {
    let stock=(fs.readFileSync('./Basededatos.json','utf-8'))
    console.log(stock)
}
module.exports = { readme }