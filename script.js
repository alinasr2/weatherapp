document.querySelector(".search").onclick = function(){
    let req = new XMLHttpRequest();
    let s = document.querySelector(".form input");
    req.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+`${s.value}`+"&appid=92464c297d87e90bc39e675c013a8bf3&units=metric");
    req.responseType = "json";
    req.send();
    req.onload = function(){
        if(req.response.cod == 200){
        getWeather(req.response.name,req.response.main.temp,req.response.main.humidity,req.response.wind.speed,req.response.weather[0].main)
        }
    }
    s.value="";
}
function getWeather(name , temp , humidity , wind ,weather ){
    document.querySelector(".card2").innerHTML = 
    `
        <div class="medal"><img src="./images/${weather}.png" alt=""></div>
        <div class="name">
            <h1>${Math.round(temp)}°C</h1>
            <h2>${name}</h2>
        </div>
        <div class="details">
            <div class="col">
                <img src="./images/humidity.png" alt="">
                <div class="text">
                    <h3>${humidity}%</h3>
                    <p>humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="./images/wind.png" alt="">
                <div class="text">
                    <h3>${wind} km/h</h3>
                    <p>wind speed</p>
                </div>
            </div>
        </div>
    `
}

