'use strict'

const Fs = require('fs')
const {Command} = require('@adonisjs/ace')

class Package extends Command {
    static get signature() {
        return 'package'
    }

    static get description() {
        return 'Print the content of package.json file'
    }

    async handle() {
        const pkg = Fs.readFileSync('package.json')
        console.log(pkg.toString())
    }

}

module.exports = Package