// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const irc = require('irc')
function Client(server) {
	this.server = server
	this.channels =
	this.join = function (channel) {}
	this.part function (channel) {}
}
