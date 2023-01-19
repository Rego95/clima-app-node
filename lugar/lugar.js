const axios = require('axios');

const getLugarLatLng = async (dir) =>{

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
    baseURL: 'https://ip-geo-location.p.rapidapi.com/ip/check',
    headers: { 'X-RapidAPI-Key': 'bea0518664mshe4273a361bbcc1ap1fa0dejsncaa84f0cfee1' }

});

const resp = await instance.get();

if( resp.data.Results.length === 0){
    throw new Error (`No hay resultados de ${dir}`);
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const lng = data.lon;

return {
    direccion,
    lat,
    lng
}
}

module.exports={
    getLugarLatLng
} 