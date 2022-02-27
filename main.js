import axios from 'axios'
import apikey from './apiKey'


async function weatherByIp() {
    let ip = ""
    let latlong = ''

    // fetch the IP
    await axios({
        method: 'GET',
        url: 'https://api.ipify.org?format=json',
        headers: {
            // 'Content-Type': 'application/json',
        },
    })
        .then(res => {

            ip = res.data.ip
            console.log(ip)
        })


    // fetch latlong from ip 
    await axios({
        // method: 'GET',
        method: "GET",
        url: `https://ipapi.co/${ip}/latlong/`,
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        latlong = res.data
    })

    console.log(latlong)


    // fetch weather using latlong
    // https://www.weatherapi.com/docs/#
    await axios({
        method: 'GET',
        url: "http://api.weatherapi.com/v1/current.json",
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            key: apikey,
            q: latlong
        }
    }).then(res => {
        console.log(res.data)
    })


}

weatherByIp()