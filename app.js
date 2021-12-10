const { crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//const base = 4;

console.clear();

console.log(argv)

// const [ , , arg3='--base=9'] = process.argv;

// const [ , base = 5] = arg3.split('='); //busca el = y separa en 2, la primer parte no me intersa y guardo la segunda en base

// console.log(base);
const {b, h, l} = argv;

crearArchivoTabla(b, h, l)
     .then( (msg) => console.log(msg.rainbow, 'creado satisfactoriamente.'))
     .catch( (err) => console.log(err));
