#!/usr/bin/env node
const open = require('open')
const spawn = require('cross-spawn');
const { exec } = require('child_process')
exec('npx webpack --mode=development', () => {
    spawn('npx', [ 'webpack', '--watch', '--mode=development' ], { stdio: 'inherit' });
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})