'use strict'

const {Command} = require('@adonisjs/ace')

class Name extends Command {
    static get signature() {
        return `
            name
            { name: your name}
        `
    }

    static get description() {
        return 'What is your name?'
    }

    async handle({name}) {
        console.log(`Hello ${name}`)
    }
}

module.exports = Name