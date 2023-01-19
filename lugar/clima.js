

const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4e1dff1555f6fd0bbf84791921ec244a`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}