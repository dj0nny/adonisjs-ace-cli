'use strict'

const {Command} = require('@adonisjs/ace');

class Flag extends Command {
    static get signature() {
        return `
            flag
            {-c, --check: check if you used this command with the flag}
        `
    }

    static get description() {
        return 'Check'
    }

    async handle(args, {check}) {
        console.log("You used this command ${check: ? 'with' : 'without'} flag")
    }
}

module.exports = Flag