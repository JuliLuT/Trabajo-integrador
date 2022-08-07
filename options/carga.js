const fs = require("fs")
const writebook = require('../writebook')
function carga(title, author, genre, year, cost, price) {
    let newbook = JSON.parse(fs.readFileSync("./Basededatos.json", "utf-8"))

    newbook.push({ title, author, genre, year, cost, price, id: (newbook.length+1) })

    writebook(newbook)
}

module.exports = { carga }