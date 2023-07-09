
let currTemp=document.getElementById('curr-temp')
let currFl=document.getElementById('current-fl')
let currPrecip=document.getElementById('current-precip')
let currWind=document.getElementById('current-wind')
let currHumid=document.getElementById('current-humid')
let currIcon=document.getElementById('curr-icon')
let btn=document.getElementById('btn')
let cityName=document.getElementById('city-name')

let forecasts=document.querySelectorAll('.day-card-day')
let temperatures=document.querySelectorAll('.day-temp')
let dailyIcons=document.querySelectorAll('.weather-icon')


let hrTemps=document.querySelectorAll('.hourly-temp')
let hrFlTemps=document.querySelectorAll('.hourly-fl-temp')
let hrWinds=document.querySelectorAll('.hourly-wind')
let hrHumids=document.querySelectorAll('.hourly-humid')
let hrPrecips=document.querySelectorAll('.hourly-precip')
let hrWeatherIcons=document.querySelectorAll('.hourly-weather-icon')
let city=document.getElementById('city-input').value;

let count=0
let getWeatherData=(city)=>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key= 0583a637e9b0442b8f0204700230707&q=${city}&days=7&aqi=no&alerts=no`)
    .then(Response=>Response.json())
    .then((Response)=>{

        
        cityName.innerText=city
        setCurrWeather(Response)
        
 
    })
    .catch(err=>console.error(err))
}

let searchCity=()=>{
    let city=document.getElementById('city-input').value
    getWeatherData(city)
}

function setCurrWeather(Response){
        currTemp.innerText=Response.current.temp_c
        currFl.innerText=Response.current.feelslike_c
        currPrecip.innerText=Response.current.precip_in
        currWind.innerText=Response.current.wind_mph
        currHumid.innerText=Response.current.humidity
        currIcon.src=Response.current.condition.icon

        while(count<=5){
            forecasts[count].innerText
            =Response.forecast.forecastday[count].date
    
            
            temperatures[count].innerText
            =Response.forecast.forecastday[count+1].day.avgtemp_c
    
            console.log(temperatures[count].innerText)
            dailyIcons[count].src
            =Response.forecast.forecastday[count+1].day.condition.icon
            
            count++
        }
        count=0
        /*setHourlyWeather(Response)*/

    let i=0
    let j=0
    console.log(hrWeatherIcons[6])
    while(i<=8){
        /* forecast forecastday[0] hour[j] */
         
        hrTemps[i].innerText=Response.forecast.forecastday[0].hour[j].temp_c
        hrFlTemps[i].innerText=Response.forecast.forecastday[0].hour[j].feelslike_c
        hrWinds[i].innerText=Response.forecast.forecastday[0].hour[j].wind_mph
        hrHumids[i].innerText=Response.forecast.forecastday[0].hour[j].humidity
        hrPrecips[i].innerText=Response.forecast.forecastday[0].hour[j].precip_in
        hrWeatherIcons[i].src=Response.forecast.forecastday[0].hour[j].condition.icon
         i++
         j=j+3
     }

     i=0
     j=0

     
}



/*function setDailyWeather(Response){
    
    while(count<=5){
        forecasts[count].innerText
        =Response.forecast.forecastday[count].date

        
        temperatures[count].innerText
        =Response.forecast.forecastday[count+1].day.avgtemp_c

        console.log(temperatures[count].innerText)
        dailyIcons[count].src
        =Response.forecast.forecastday[count+1].day.condition.icon
        
        count++
    }
    
    
    
}
*/




/*function setHourlyWeather(Response){
    let i=0
    let j=0

    while(i<8){
        /* forecast forecastday[0] hour[j] */
         
        /*hrTemps[i].innerText=Response.forecast.forecastday[0].hour[j].temp_c
         i++
         j=j+3
     }

     i=0
     j=0

     while(i<8){
        /* forecast forecastday[0] hour[j] */
         
        /*hrFlTemps[i].innerText=Response.forecast.forecastday[0].hour[j].feelslike_c
         i++
         j=j+3
     }

     i=0
     j=0
     

     i=0
     j=0
     while(i<8){
        /* forecast forecastday[0] hour[j] */
         
       /* hrWinds[i].innerText=Response.forecast.forecastday[0].hour[j].wind_mph
         i++
         j=j+3
     }

     i=0
     j=0
     while(i<8){
        /* forecast forecastday[0] hour[j] */
         
       /* hrHumids[i].innerText=Response.forecast.forecastday[0].hour[j].humidity
         i++
         j=j+3
     }

     i=0
     j=0

     while(i<8){
        /* forecast forecastday[0] hour[j] */
         
      /*  hrPrecips[i].innerText=Response.forecast.forecastday[0].hour[j].precip_in
         i++
         j=j+3
     }

     i=0
     j=0

     /*while(i<8){

        hrWeatherIcons[i].src=Response.forecast.forecastday[0].hour[j].condition.icon
        i++
        j=j+3
     }
     
}*/