/*
 * Este archivo lista los numero que se van a multiplicar
 * la base que se multiplicara y el limite que se impondra
 */

 const listarTabla = (base, limite) => {

 	return new Promise((resolve, reject) => {

 		// Evaluamos base y limite
 		if(!Number(base) || !Number(limite)) {
 			reject(`El parametro ingresado no es un numero`);
 			return;
 		}

 		// Determinar lla variable que contendra la multiplicacion
 		let data = '';

 		for(let i = 1; i <= limite; i++) {

 			data += `${base} X ${i} = ${base * i} \n`;
 		}

 		resolve(data);

 	}); // Fin de la promesa

 } // Fin de la funcion listarTabla

 // importar la funcion al moduloObject
 module.exports = {
 	listarTabla
 }