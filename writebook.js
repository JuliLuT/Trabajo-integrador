const fs = require('fs')

module.exports = (data) => {
  fs.writeFileSync('./Basededatos.json', JSON.stringify(data, null, 2))
}