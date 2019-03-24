'use strict'

const {Command} = require('@adonisjs/ace')

class Choice extends Command {
    static get signature() {
        return `
            choice
        `
    }

    static get description() {
        return 'Select your answer from a list'
    }

    async handle() {
        const starter = await this.choice('Choose you starter', [
            {
                value: 1,
                name: 'Bulbasaur'
            },
            {
                value: 2,
                name: 'Squirtle'
            },
            {
                value: 3,
                name: 'Charmender'
            }
        ], '3')
        // console.log(starter)

        switch (starter) {
            case 1:
                this.error('Not a good choice, dude');
                break;
            case 2:
                this.warn('Mhmhmh okay');
                break;
            case 3:
                this.success('Yes dude! Good choice');
                break;
        }
    }
}

module.exports = Choice