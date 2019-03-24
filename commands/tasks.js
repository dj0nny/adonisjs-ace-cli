'use strict'

const { Command } = require('@adonisjs/ace')
const Listr = require('listr')

class Tasks extends Command {
    static get signature() {
        return `
            tasks
        `
    }

    static get description() {
        return 'Run a list of async tasks'
    }

    async handle() {
        const tasks = new Listr([
            {
                title: 'Fueling the rocket',
                task: async () => {
                    await this.waitSecond()
                }
            },
            {
                title: 'Boarding passengers',
                task: async () => {
                    await this.waitSecond()
                }
            },
            {
                title: 'Boarding more passengers',
                skip: () => true,
                task: async () => {
                    await this.waitSecond()
                }
            },
            {
                title: 'Starting the engines',
                task: async () => {
                    await this.waitSecond()
                    // throw new Error(' We failed starting the engines')
                }
            },
            {
                title: 'Launching the rocket!!!!!',
                task: async () => {
                    await this.waitSecond()
                }
            },
            {
                title: 'We are in the space *_*',
                task: async () => {
                    await this.waitSecond()
                }
            }
        ])

        tasks.run()
    
    }

    async waitSecond() {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }
}

module.exports = Tasks