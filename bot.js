'use strict';

const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);

// Minecraft bot connection to hexlsmp.xyz
const Minecraft = require('minecraft-protocol');

const mcClient = Minecraft.createClient({
    host: 'hexlsmp.xyz',
    port: 25565,
    username: 'BotName' // Change to the desired bot username
});

mcClient.on('connect', () => {
    console.log('Connected to Minecraft server!');
});

mcClient.on('error', (error) => {
    console.error('Connection error:', error);
});

mcClient.on('chat', (packet) => {
    console.log(`Received message: ${packet.message}`);
});
