const PG = require('database');
const Logger = require('logs');
const { MessageEmbed } = require('discord.js');

exports.database = PG;

exports.log = Logger;
