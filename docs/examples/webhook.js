/**
 * Send a message using a webhook
 */

// Import the discord.js module
const Discord = require('sigma.js');

// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');
