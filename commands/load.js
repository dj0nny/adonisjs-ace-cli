'use strict'

const {Command} = require('@adonisjs/ace')
const Ora = require('ora')

class Load extends Command {
    static get signature() {
        return `
            load
        `
    }

    static get description() {
        return 'Loading indicator for long running tasks'
    }

    async handle() {
        const spinner = Ora('Fueling the rocket')
        spinner.start()

        await this.waitSecond()
        spinner.color = 'magenta'
        spinner.text = 'Boarding passengers'

        await this.waitSecond()
        spinner.color = 'yellow'
        spinner.text = 'Starting the engines'

        await this.waitSecond()
        spinner.color = 'green'
        spinner.text = 'Launching the rocket!!!!!'

        await this.waitSecond()

        spinner.succeed('We are in the space *_*')

    }

    async waitSecond() {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }
}

module.exports = Load