const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async ( base = 5, hasta = 10, listar) => { // Si no mando nada como parametro toma el default :: 5





let salida, consola = '';
for (let i = 1; i <= hasta; i ++) {
    salida += `${ base } x ${ i } = ${base * i}\n`;
    consola += `${ base } x ${ i } ${ '='.green } ${base * i}\n`;
}

if (listar) {
    console.log('==============='.america);
    console.log('  TABLA DEL:'.red.bold, colors.blue.bold(base));
    console.log('==============='.america);
    console.log(consola);
}


// fs.writeFile(`tabla-${base}.txt` , salida, (err) => {

//         if (err) throw err;
//         console.log('Archivo guardado correctamente');
// })

try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // es mejor que el anterior y no necesita manejar el error, se usa try y catch
    return `tabla-${base}.txt`;
} catch(err) {
    throw err;
}


console.log('Archivo guardado correctamente');
}

module.exports = {
    crearArchivoTabla
}