const fs = require('fs');
const color = require('colors');

const crearArchivo = (base = 5)=> {
    return new Promise((resolve, reject)=> {
        let salida = '';
        for (let index = 1; index <= 10; index++) {
            salida += `${base} X ${index} = ${base * index}\n`
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    });
};
const crearArchivoAsync = async (base = 5, listar = false, hasta = 10)=> {
    try {
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`
        }
        if(listar){
            console.log(`=== Tabla de multiplicar del ${base} ===`.red);
            console.log(salida.blue);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
    crearArchivoAsync
};