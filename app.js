/*
 * En este archivo invocamos el metodo de mltiplicar.js
 */


 // importar YARGS y colors
 const argv = require('./config/yargs').argv;
 const colors = require('colors');

 // Importar los archivos JS que contienen la logica
 const { crearArchivo } = require('./carpetaFuncion/multiplicar');
 const { listarTabla } = require('./carpetaFuncion/listar');

 // Determinar la accion a seguir: listar, crear, etc
 let comando = argv._[0];
 switch (comando) {
 	case 'listar':
 		console.log('************************'. red);
 		console.log('*** Accion de Listar ***'. red);
 		console.log('************************'. red);
 		console.log(`el argumento como base es ${argv.base} y el limite fijado es ${argv.limite}`);
 		listarTabla(argv.base, argv.limite)
 		.then((resultado) => console.log(resultado))
 		.catch((error) => console.log(error))
 		break;

 	case 'crear':
 		console.log('************************'. yellow);
 		console.log('*** Accion de Crear ***'. yellow);
 		console.log('************************'. trap);
 		console.log('El argumento argv.base tiene como valor: ', argv.base);
 		 crearArchivo(argv.base, argv.limite)
		 .then((resultado) => console.log(`El archivo tabla-${argv.base} con limite ${argv.limite} ha sido creado.`))
		 .catch((error) => console.log(error))
 		break;

 	default:
 		console.log('Comando no reconocido');
 		break;
 }

 console.log('Argumentos de YARGS: -----');
 console.log(argv);

/*

 // los argumentos en node se reciben con el parametro de procces.argv
 // 'process.argv' es un argumento de node, este argumento nos trae todos los argumentos
 // que nosotros pasamos. Estan almacenados en un Array, 0 tiene la ruta de node 
 // y 1 tiene el path del archivo que se ejecuta.
 
 // let argNode2 = process.argv;

 // let argUser = argNode[2];
 // let baseUser = argUser.split('=')[1];

 console.log('Argumentos de YARGS: -----');
 console.log('base: ', argv.base);
 console.log('limite: ', argv.limite);
 console.log('Argumentos de nodejs: -----');
 console.log(argNode2);

 */

