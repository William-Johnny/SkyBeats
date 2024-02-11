import { reactive } from 'vue'

{/* <div>Picked: {{ settings }}</div> */}


const CurrentWeather =(lat,long)=>{
  axios.get(`http://api.weatherapi.com/v1/current.json?key=f3f5fc00efa44cf787680829243101&q=${lat},${long}`)
  .then(res => {
    let weather = res.data;
    store.tempInCelsius= weather.current.temp_c;
    store.tempInFar= weather.current.temp_f;
    store.weatherState= weather.current.condition.icon;
    store.cityName=weather.location.name;
    store.latitude = lat;
    store.longitude = long;
  })
}

const CurrentWeatherCity =(city)=>{
  axios.get(`http://api.weatherapi.com/v1/current.json?key=f3f5fc00efa44cf787680829243101&q=${city}`)
  .then(res => {
    let weather = res.data;
    store.cityName=city;
    store.tempInCelsius= weather.current.temp_c;
    store.tempInFar= weather.current.temp_f;
    store.weatherState= weather.current.condition.icon;
  })
}

const ForecastWeatherCity =(city)=>{
  axios.get(`http://api.weatherapi.com/v1/forecast.json?key=f3f5fc00efa44cf787680829243101&q=${city}&days=5 `)
  .then(res => {
    let weather = res.data;
    store.ForcastList = weather.forecast.forecastday;
  })
}

const ForecastWeather =(lat,long)=>{
  axios.get(`http://api.weatherapi.com/v1/forecast.json?key=f3f5fc00efa44cf787680829243101&q=${lat},${long}&days=5 `)
  .then(res => {
    let weather = res.data;
    store.ForcastList = weather.forecast.forecastday;
  })
}


const store = reactive({
  tempInCelsius: "_ _",
  weatherState: "",
  tempInFar: "_ _",
  temp:"",
  searchedItems:"",
  cityName: "",
  music: "",
  ForcastList: "",
  latitude: "",
  longitude: ""
})



export{store,CurrentWeather,CurrentWeatherCity,ForecastWeatherCity,ForecastWeather}