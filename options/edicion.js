const fs = require("fs")
const writebook = require("../writebook")
function editar(id, newtitle, newauthor, newgenre, newyear, newcost, newprice) {
    let editedbook = JSON.parse(fs.readFileSync('./Basededatos.json', 'utf-8'))
    for (let i = 0; i < editedbook.length; i++) {
        if (editedbook[i].id == id)
            (editedbook[i].title = newtitle, editedbook[i].author = newauthor, editedbook[i].genre = newgenre, editedbook[i].year = newyear, editedbook[i].cost = newcost, editedbook[i].price = newprice)
    } writebook(editedbook)
} module.exports = { editar }