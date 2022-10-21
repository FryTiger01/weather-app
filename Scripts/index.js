const $ = document

// tehran selector
let degree_tehran = $.querySelector("#degree__tehran")
let status_tehran = $.querySelector("#status__tehran")
let humidity_tehran = $.querySelector("#humidity__tehran")
let wind_tehran = $.querySelector("#wind__tehran")


let tehranInf = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=turkey&appid=24cbd759341747f1077780d30f3b0199")
    .then(res => res.json())
    .then(res => {
        degree_tehran.innerHTML = Math.floor(res.main.temp - 273.15).toFixed(2)+"°С"
        wind_tehran.innerHTML = res.wind.speed
        humidity_tehran.innerHTML = res.main.humidity
        status_tehran.innerHTML =  res.weather[0].main
        return "success"
    }).then(res => console.log(res))
    .catch(err => console.log(err + "for Tehran"))
}




//  
// 
// 
tehranInf()

