#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const { exec } = require('child_process')

// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-f, --favori', 'Show favori')
 .option('-h, --historique', 'Show historique')
 .option('-v, --ville [name]', 'Search ville')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.favori) {
 console.log('Hello world!')
} else if (program.historique) {
 console.log('Hello all!')
} else if (program.ville) {
 console.log(`Hello ${program.ville}!`)
} else {
 program.help()
}
