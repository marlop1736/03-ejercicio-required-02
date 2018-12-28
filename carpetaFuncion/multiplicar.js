/*
 * required
 */

const fs = require('fs');

let crearArchivo = (base, limite) => {

	return new Promise((resolve, reject) => {

	// Evaluamos base
	if(!Number(base) || !Number(limite)) {
		reject(`El parametro ingresado (${base}) no es un numero.`);
		return;
	}

	let data = '';

	for(let i = 1; i <= limite; i++) {

		data += `${base} X ${i} = ${base * i} \n `;
	}

	fs.writeFile(`carpetaFuncion/tablas/tabla-${base}-limite-${limite}.txt`, data, (error) => {

		if(error) {
			reject(error);
		} else {
			resolve(`tabla-${base}-limite-${limite}.txt`);
		}
	});

	}); // Fin de la promesa
}

module.exports = {
	crearArchivo
}