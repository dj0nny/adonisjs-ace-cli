'use strict';

const ace = require('@adonisjs/ace');

ace.addCommand(require('./commands/hello'));

ace.wireUpWithCommander();
ace.invoke();
