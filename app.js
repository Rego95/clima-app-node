
const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng( argv.direccion)
//     .then( console.log);

// clima.getClima( -23, -58)
//     .then(console.log)
//     .catch( console.log)

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp} .`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;        
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
