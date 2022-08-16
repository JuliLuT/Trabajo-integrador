const fs = require("fs")
const writebook = require('../writebook')
function carga(title, author, genre, year, cost, price) {
    let newbook = JSON.parse(fs.readFileSync("./Basededatos.json", "utf-8"))

    // El ID está bien resuelto, para ser incisivo, mi consejo es primero leer tu base de datos, parseearla y ahí filtrarla con un .filter o un .find para chequear
    // si ya exite el id equivalente a .length + 1; y en caso de que ya lo haga definir el id como .length+2 o sino existe dejarlo tal cuál está ahora.
    // Eso resolvería el inconveniente en caso de borrar un libro y entonces el array se acorta y por tanto terminaría repitiendo ID.
    newbook.push({ title, author, genre, year, cost, price, id: (newbook.length+1) })

    writebook(newbook)
}

module.exports = { carga }
