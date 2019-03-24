'use strict'

const { Command } = require('@adonisjs/ace')
const Listr = require('listr')

class TasksParallel extends Command {
    static get signature() {
        return `
            tasks:parallel
        `
    }

    static get description() {
        return 'Run a list of async tasks in parallel'
    }

    async handle() {
        const tasks = new Listr([
            {
                title: 'Prepare the start',
                task: () => new Listr([
                    {
                        title: 'Fueling the rocket',
                        task: async () => {
                            await this.waitSeconds(10)
                        }
                    },
                    {
                        title: 'Boarding passengers',
                        task: async () => {
                            await this.waitSeconds(5)
                        }
                    },
                    {
                        title: 'Boarding more passengers',
                        skip: () => false,
                        task: async () => {
                            await this.waitSeconds(7)
                        }
                    },
                    {
                        title: 'Starting the engines',
                        task: async () => {
                            await this.waitSeconds(15)
                            // throw new Error(' We failed starting the engines')
                        }
                    }
                ], {concurrent: true})
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

        await tasks.run()

    }

    async waitSecond() {
        return this.waitSeconds(1)
    }

    async waitSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000))
    }
}

module.exports = TasksParallel