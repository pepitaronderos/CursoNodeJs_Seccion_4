import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';
import colors from 'colors';

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
	.then(nombreArchivo => console.log(nombreArchivo.warn, "creado"))
	.catch(error => console.log(error.error));