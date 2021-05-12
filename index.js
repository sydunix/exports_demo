const express = require('express');
const server = express();
const config = require ('./config.js');

//const controller = require ('./control.js');
const {controller} = require ('./control.js');

const data = require ('./data.js');

// 1. Displaying data from config.js
console.log('Visit: '+ config.url + ':' + config.port);

console.log ('\n'); //newline

// 2. Displaying data from control.js
//console.log(controller.controller().message);
console.log(controller().message);

console.log ('\n'); //newline

// 3. Displaying data from data.js
console.log('name: '+ data.name + '\nweapon: ' 
			+ data.weapon + '\nweakness: '+ data.weakness);

console.log ('\n'); //newline

const port = 4000;
server.listen(port, 
	()=>console.log('Server listening on port: ' + port));