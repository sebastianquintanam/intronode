const axios = require("axios");
console.log("Hello World");

let apiKey = "8e6330a78aa20b41b54f3fcaa3e9994f";
let city = "Bogota, col";

let requestConfig = {
    url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey,
};

console.log(requestConfig);

let objPromesa = axios(requestConfig);

objPromesa
    .then(function (response) {
        //response.data -> son los datos que envia la API
        console.log(
            "La temperatura en Bogota, Colombia, es: " +
                (response.data.main.temp - 273.15).toFixed(2).toString() +
                " Grados celcius"
        );
    })
    .catch(function (err) {
        console.log(err);
    });
