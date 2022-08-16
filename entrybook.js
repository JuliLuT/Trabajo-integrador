const carga = require('./options/carga')
const lectura = require('./options/lectura')
const edicion = require('./options/edicion')
const borrado = require('./options/borrado')

// Es una buena práctica añadir una opción default a tu switch, en este caso que al menos imprima en consola una string indicando que el comando pasado no fue válido.

switch (process.argv[2]) {
    case 'new':
        carga.carga(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8])
        break
    case 'read':
        lectura.readme()
        break
    case 'edit':
        edicion.editar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9])
        break
    case 'delete':
        borrado.deleted(process.argv[3])
        break
}
