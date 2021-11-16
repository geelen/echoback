var crypto = require("crypto");
var fs = require('fs')

var id = crypto.randomBytes(950 * 1024).toString('base64');

const contents = `
const ID = \`${id}\`

export default {
    async fetch() {
        return new Response('' + ID.length)
    }
}
`

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

fs.writeFileSync('dist/_worker.js', contents)

console.log(`Wrote a file of ${contents.length} bytes.`)
