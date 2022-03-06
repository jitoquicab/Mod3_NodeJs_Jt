const argv = require('yargs')
                    .option('b', {
                        alias :  'base',
                        type : 'number',
                        demandOption : true,
                        describe : 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias : 'listar',
                        type : 'boolean',
                        default : false,
                        describe : 'Lista en consla la tabla de multiplicar por la base'
                    }) 
                    .option('h', {
                        alias : 'hasta',
                        type : 'number',
                        default : 10,
                        describe : 'Limite de hasta donde se desea imprimir la lista de multiplicar.'
                      })  
                    .check((argv, options) => {
                        if((isNaN(argv.b)))
                              throw  'El campo base debe ser numerico.'
                        if((isNaN(argv.h)))
                            throw 'El campo hasta debe ser númerico.'
                        else
                            return true
                    })
                    .argv;

module.exports =  { argv };