let input=document.querySelector('input');
let searchBtn=document.getElementById("search-btn");
let cityplace=document.getElementById("cityName");
let temp=document.getElementById("temp");
let date=document.getElementById("date");
let time=document.getElementById("time");
let Weatherdescription=document.getElementById("description");
let humidity=document.getElementById("humidity");
let windspeed=document.getElementById("windSpeed");
let imageLogo=document.getElementById("logoimg");  

let card=document.querySelectorAll(".wCard");

const API_KEY="YOU APIKEY";

let city;

searchBtn.addEventListener('click',()=>{
    city=input.value.trim();
    input.value="";
    let weatherData= fetchData(city);
     console.log(city)

})

input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter')
    {
        city=input.value.trim();
        input.value="";
        console.log(city); 
       let weatherData= fetchData(city);
       forecast(city);
    }
  
});

let d=new Date();
date.textContent=d.toDateString();

setInterval(()=>{
    let d=new Date();
    let t=d.toLocaleTimeString();
    time.textContent=t;
},1000);


async function fetchData(city)
{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
        let response=await fetch(URL);
      
        let data= await response.json();
        if(response.ok)
        {
            cityplace.textContent=city.toUpperCase();
        }
        displayData(data);
        console.log(data);
        if(!response.ok)
        {
            input.value="City Not Found";
            throw new Error("City Not Found!!");
        }
}


function displayData(data)
{
    temp.textContent=`${data.main.temp} ℃`;
    let icon=data.weather[0].icon;
    imageLogo.src=`https://openweathermap.org/payload/api/media/file/${icon}.png`;
    description.textContent=data.weather[0].description;
    humidity.textContent=`${data.main.humidity}%`
    windspeed.textContent=`${Math.floor(data.wind.speed *3.6)} km/hr`
    
}


async function forecast(city)
{
    const URL=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=7`;

    let response =await fetch(URL);
    let forecastData=await response.json();
    console.log(forecastData);
    forecastDisplay(forecastData);
}

function forecastDisplay(forecastData)
{

    // for(let i=0;i<7;i++)
    // {
    //     let dt=forecastData.list[i].dt
    //     let time=new Date(dt*1000).getHours();
    //     card[i].children[0].textContent =time;
    //     // console.log(forecastData.list[i].clouds.dt);
    // }

    for (let i = 0; i < 7; i++) 
    {
    let dt = forecastData.list[i].dt;

    let hour = new Date(dt * 1000).getHours();

    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour || 12;

    card[i].children[0].textContent = `${hour} ${ampm}`;
    }

    for(let i=0;i<7;i++)
    {
        let icon=forecastData.list[i].weather[0].icon;
        card[i].children[1].src=`https://openweathermap.org/payload/api/media/file/${icon}.png`;
    }

    for(let i=0;i<7;i++)
    {
        card[i].children[2].textContent=Math.floor(forecastData.list[i].main.temp)+"℃";
    }
}


   