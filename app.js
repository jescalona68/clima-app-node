const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(8.990000, -79.519997)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return ` El clima de ${ coords.direccion} es de ${ temp }.`;
    } catch (e) {
        return `no se pudo determinar el clima de ${ direccion } ${ coords.lat }, ${ coords.lng }`

    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);