const fs = require("fs")
const writejson=require('../writebook')
function deleted(id) {
    let Basededatos = fs.readFileSync("./Basededatos.json", "utf-8")
    let Baseparseada = JSON.parse(Basededatos)
    for (let i = 0; i < Baseparseada.length; i++) {
        if (Baseparseada[i].id == id)
            Baseparseada.splice(i, 1)
    }
    writejson(Baseparseada)
    return "tarea borrada"

} module.exports = { deleted }