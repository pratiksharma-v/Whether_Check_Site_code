const apiKey = "9302acd6edc27938fc3c7c8e9d882a51";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('#search input')
const searchBtn = document.querySelector('#search button')
let imagess = document.querySelector('.weatherImage');


async function checkweather(city){
       let response = await fetch(apiUrl + city +`&appid=${apiKey}`);
       var data = await response.json();
       console.log(data)


       document.querySelector('h2').innerHTML = Math.round(data.main.temp) +"°C";
       document.querySelector('h1').innerHTML = data.name;
       document.querySelector('#hmdty').innerHTML = data.main.humidity +"%";
       document.querySelector('#windy').innerHTML = data.wind.speed +" km/h";

       if(data.weather[0].main == "Clouds"){
         imagess.src = "images/clear.png";
       }else if(data.weather[0].main == "Clear"){
         imagess.src ="weather/clear.png";
       }else if(data.weather[0].main == "Rain"){
         imagess.src = "images/rain.png";
       }else if(data.weather[0].main == "Drizzle"){
         imagess.src = "images/drizzle.png";
       }else if(data.weather[0].main == "Mist"){
         imagess.src = "images/mist.png";
       }else if(data.weather[0].main == "Snow"){
         imagess.src = "images/snow.png";
       }
      }
     searchBtn.addEventListener('click' , ()=>{
        checkweather(searchInput.value)

     })

   
