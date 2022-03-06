const {  crearArchivoAsync } = require('./helpers/multiplicar');
const {  argv } = require('./config/yargs');

console.clear();

crearArchivoAsync(argv.base, argv.listar, argv.hasta)
    .then( nombreArchivo => console.log( nombreArchivo, ' -> creado' ) )
    .catch( err => console.log(err));


