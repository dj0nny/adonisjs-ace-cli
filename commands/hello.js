'use strict';

const { Command } = require('@adonisjs/ace');

class Hello extends Command {
	static get signature() {
		return 'hello';
	}

	static get description() {
		return 'Say hello to the user';
	}

	async handle() {
		console.log('Hello dude!');
	}
}

module.exports = Hello