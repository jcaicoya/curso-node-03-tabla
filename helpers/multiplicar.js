const fs = require('fs');
const colors = require('colors')



const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida  = '';
        let consola = '';
   
        for (let ii = 1; ii <= hasta; ii++) {
            consola += `${base} ${'x'.green} ${ii} ${'='.green} ${base * ii}\n`;
            salida += `${base} x ${ii} = ${base * ii}\n`;
        }
        if (listar) {
            console.log('================='.green);
            console.log('   Tabla del'.green, colors.blue(base));
            console.log('================='.green);
            console.log(consola);
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        console.log(`Tabla del ${base} escrita en disco`);
        return `./salida/tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}


module.exports = {
    crearArchivo: crearArchivo
}


const crearArchivoOtro = ( base = 5 ) => {

    return new Promise( (resolve, reject) => {
        console.log('===========');
        console.log(`Tabla del ${base}`);
        console.log('===========');
    
        let salida = '';
        
        for (let ii = 1; ii <= 10; ii++) {
            salida += `${base} x ${ii} = ${base * ii}\n`;
        }
        console.log(salida);
        
        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`Tabla del ${base} escrita en disco`);
        // })
        
        fs.writeFileSync( `tabla-${base}.txt`, salida );
        console.log(`Tabla del ${base} escrita en disco`);
        resolve `tabla-${base}.txt`;
    })
}
