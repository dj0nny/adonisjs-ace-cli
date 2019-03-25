# adonisjs-ace-cli

> A CLI developed using Adonisjs' Ace framework

## Introduction

__[Adonis Ace](https://github.com/adonisjs/ace)__ is a Node.js Framework to create command-line interfaces.

This repository is a starter kit for showing the main features of this powerful framework

## Getting Started

### Prerequisites

You must have __Npm__ or __Yarn__ installed on your machine.
 
### Installing

Clone the repository using __Git__:
`https://github.com/dj0nny/adonisjs-ace-cli.git`

Or __download__ the repository [here](https://github.com/dj0nny/adonisjs-ace-cli/archive/develop.zip)

---

Run `npm install` or `yarn install` for installing the dependencies.

### Running the CLI

Type `npm run start` or `yarn run start` for running the CLI: it'll be show the list of commands.

### List of commands

Command name  | Usage                                                            |   Flags       | Arguments
------------- | -----------------------------------------------------------------| ------------- | ---------
hello         | _npm run start hello_  or _yarn run start hello_                 | None          | None
package       | _npm run start package_ or _yarn run start package_              | None          | None
flag          | _npm run start flag_ or _yarn run start flag_                    | -c, --check   | None
name          | _npm run start name yourName_ or _yarn run start name yourName_  | None          | yourName: __string__
ask           | _npm run start ask_ or _yarn run start ask_                      | None          | None
choice        | _npm run start choice_ or _yarn run start choice_                | None          | None
icons         | _npm run start icons_ or _yarn run start icons_                  | None          | None
tasks         | _npm run start tasks_ or _yarn run start tasks_                  | None          | None
tasks:parallel| _npm run start tasks:parallel_ or _yarn run start tasks:parallel_| None          | None

## Overview

### cli.js

The CLI is configured within this flle

```javascript
'use strict';

const ace = require('@adonisjs/ace');

ace.addCommand(require('./commands/hello'));
ace.addCommand(require('./commands/package'));
ace.addCommand(require('./commands/flag'));
ace.addCommand(require('./commands/name'));
ace.addCommand(require('./commands/ask'));
ace.addCommand(require('./commands/choice'));
ace.addCommand(require('./commands/icons'));
ace.addCommand(require('./commands/load'));
ace.addCommand(require('./commands/tasks'));
ace.addCommand(require('./commands/tasks-parallel'));

ace.wireUpWithCommander();
ace.invoke();
```

* `ace.addCommand(require('...'));`: is the function to import a new command within the CLI
* `ace.wireUpWithCommander();` and `ace.invoke();`: are functions for initialzing the CLI

### Define a new command

The definition of a new command for the CLI requires these three functions

```javascript
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
```
__NB__: for this project it was used `ES6`

* __signature()__: is the name of the command
* __description()__: is the description of the command that will appear, for example, in the help text
* __handle()__: is the implementation of the command

## Built with ❤ using:

* [Adonis Ace](https://github.com/adonisjs/ace) - A Node.js framework for creating CLI
* [Ora](https://github.com/sindresorhus/ora) - Elegant terminal spinner
* [Listr](https://github.com/SamVerschueren/listr) - Terminal task list


## Contributing

Pull Requests for adding features ⇄ and ★ are welcome
