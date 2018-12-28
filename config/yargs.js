/*
 * Este archivo lo importaremos a app.js
 * es la configuracion de nuestro YARGS
 */

// Definir el objeto que es parametro en .command
 const opts = {

 	base: {
 			demand: true,
 			alias: 'b'
 		},
 	limite : {
 				alias: 'l',
 				default: 10
 			}
 };


 const argv = require('yargs')
 		.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
 		.command('crear', 'Genera la tabla de multiplicar', opts)
 		.help()
 		.argv;

 // Exportar YARGS en exports
 module.exports = {
 	argv
 }