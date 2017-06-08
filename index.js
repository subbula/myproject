/**
 * Created by subbulakshmir on 8/6/17.
 */
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
console.log("Haiiiiiii");
server.start();


