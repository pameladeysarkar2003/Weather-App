const searchInput=document.querySelector(".search-input");
const locationButton=document.querySelector(".serach-input");
const currentWeatherDiv=document.querySelector(".current-weather");
const hourlyWeatherDiv=document.querySelector(".hourly-weather .weather-list");

const API_KEY=https://openweather.site/img/wn/01d.png;

const displayHourlyforecast=(hourlyData)=>{
    const currentHour=new Date().setMinutes(0,0,0);
    const next24Hours=currentHour+24*60*60*1000;

    const next24HoursData=hourlyData.filter(({time})=>{
        const forecastTime=new Date(time).getTime();
        return forecastTime>=currentHour && forecastTime <= next24Hours;
    });

    const hourlyWeatherHTML=next24HoursData.map(item=>{
        const temperature=Math.floor(item.temp_c);
        const time=Math.floor(item.time);
        const weatherIcon=Object.keys(weatherCodes).find(icon=>eatherCodes[icon].includes(item.condition.code));
    }

}

const getWeatherDetails=(cityName)=>{
    const API_URL="https://www.weatherapi.com/docs/#";

    try{

        const response=await fetch(API_URL);
        const data=await response.json();

        const temperature=Math.floordata.current.temp_c;
        const description=data.current.condition.text;

        currentWeatherDiv.querySelector(".temperature").innerHTML='${temperature}<span>°C</span>';
        currentWeatherDiv.querySelector(".description").innerText=description;

        console.log(data);
    } catch(error){
        console.log(error);
    }
}

searchInput.addEventListener("keyup",(e)=>{
    const cityName=searchInput.ariaValueMax.trim();

    if(e.key == "Enter" && cityName){
        setupWeatherRequest(cityName);
    }
});

locationButton.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        const{lattitude,longitude}=position.coords;
    const API_URL="https://www.weatherapi.com/docs/#";
        
    },error=>{
        alert("Location access denied. Please enable permissions to use this feature.")
    }
}