const fs = require("fs")
const writebook = require("../writebook")
function editar(id, newtitle, newauthor, newgenre, newyear, newcost, newprice) {
    // La función está bien en general, como detalle y propuesta para repasar y mejorar el dominio sobre javascript, propongo pensar como refactorizar
    // el código de modo que no tenga que editar *todos* los campos del libro y los que no quiera editar entonces no les pase valores nuevos
    // se mantengan los originales sin que queden vacíos o undefined.
    let editedbook = JSON.parse(fs.readFileSync('./Basededatos.json', 'utf-8'))
    for (let i = 0; i < editedbook.length; i++) {
        if (editedbook[i].id == id)
            (editedbook[i].title = newtitle, editedbook[i].author = newauthor, editedbook[i].genre = newgenre, editedbook[i].year = newyear, editedbook[i].cost = newcost, editedbook[i].price = newprice)
    } writebook(editedbook)
} module.exports = { editar }
