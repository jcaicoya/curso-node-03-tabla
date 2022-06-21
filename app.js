console.clear();

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')


// console.log(process.argv);

console.log(argv);
console.log('base: yargs', argv.b);

crearArchivo( argv.b, argv.l, argv.a )
    .then ( nombreArchvo => console.log(nombreArchvo.rainbow, 'creado') )
    .catch( err => console.log(err) );