'use strict'

const {Command} = require('@adonisjs/ace')

class Ask extends Command {
    static get signature() {
        return `
            ask
        `

    }

    static get description() {
        return 'I ask a question'
    }

    async handle() {
        const confirm = await this.confirm('Do you like Pokèmon');
        if(confirm) {
            const input = await this.ask('What is your favourite pokèmon?')
            console.log(`You answer is ${input}`)
        } else {
            console.log(`:(`)
        }
    }

}

module.exports = Ask  