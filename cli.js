'use strict';

const ace = require('@adonisjs/ace');

ace.addCommand(require('./commands/hello'));
ace.addCommand(require('./commands/package'));
ace.addCommand(require('./commands/flag'))

ace.wireUpWithCommander();
ace.invoke();
