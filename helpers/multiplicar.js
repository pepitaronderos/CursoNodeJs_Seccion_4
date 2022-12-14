import fs from 'fs';

//Manera de hacer lo del file con writeFile
/* fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
	if (error) {
		throw error;
	}

	console.log(`tabla-${base}.txt creada`);
}); */

const crearArchivo = async (base, hasta, listar) => {
	try {
		let salida = "";
		let consola = "";

		for (let i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${"x".brightMagenta} ${i} ${"=".brightGreen} ${base * i}\n`;
		}

		if (listar) {
			console.log(`====================
   Tabla del: ${base}
====================`.rainbow.italic);
			console.log(consola.bold.brightWhite);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

export {
	crearArchivo
}