'use strict'

const {Command} = require('@adonisjs/ace')

class Icons extends Command {
    static get signature() {
        return `
            icons
        `
    }

    static get description() {
        return 'Output messages with icons'
    }

    async handle() {
        console.log(`${this.icon('success')} This is a success icon`);
        console.log(`${this.icon('info')} This is a info icon`);
        console.log(`${this.icon('warn')} This is a warning icon`);
        console.log(`${this.icon('error')} This is a error icon`);

    }
}

module.exports = Icons