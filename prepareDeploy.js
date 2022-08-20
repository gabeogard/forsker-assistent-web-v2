#!/usr/bin/env node
const path = require('path');
const os = require('os');
const fs = require('fs');

const timestamp = Date.now();
const targetPath = `./out/${timestamp}`;
const tmpPath = path.join(__dirname, `${timestamp}`);

console.info('Moving to temp directories');
fs.readdirSync('./out');
fs.renameSync(`./out`, tmpPath);

console.info('Moving to release folder and creating symlink');
fs.mkdirSync(targetPath, { recursive: true });
fs.renameSync(`${timestamp}`, targetPath);

process.chdir('./out');
fs.symlinkSync(`${timestamp}`, 'current');
