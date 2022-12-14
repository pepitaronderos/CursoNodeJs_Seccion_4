import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Es la base de la tabla de multiplicar"
	})
	.option("h", {
		alias: "hasta",
		type: "number",
		demandOption: true,
		describe: "Este es el numero hasta el cual quieres multiplicar"
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Muestra la tabla en consola"
	})
	.check((argv, options) => {
		if (isNaN(argv.b) || isNaN(argv.h)) {
			throw "La base y el hasta tienen que ser un numero"
		}
		return true;
	})
	.argv;

export {
	argv
}


