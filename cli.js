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

ace.wireUpWithCommander();
ace.invoke();
