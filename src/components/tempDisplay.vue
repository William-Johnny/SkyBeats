<script setup>
import { CurrentWeather,store,ForecastWeather } from '@/store/temp.js';
import { useGeolocation } from '@vueuse/core'
import { computed } from 'vue'

const { coords, locatedAt, error, resume, pause } = useGeolocation()

const tempDisplay = computed (()=> {

  if (store.temp==="tempInCelsius") {
    return store.tempInCelsius
  }else if (store.temp==="tempInFar") {
    return store.tempInFar
  }else{
    return store.tempInCelsius
  }
})

const getLocation=(latitude,longitude)=>{
  CurrentWeather(latitude,longitude)
  ForecastWeather(latitude,longitude)
  if (store.music !== "") {
    store.music.pause()
  }
}

</script>

<template>
  
  <div class="greetings">
    <h1 class="green">{{ store.cityName }}</h1>
    <h2>
      {{ tempDisplay }}°
    </h2>
    <img :src= "store.weatherState" alt="You need to authorize location or search a location to see the weather">
    <p v-if="store.tempInCelsius >= 15" >Pas besoin de bouillotte aujourd'hui !</p>
    <p v-else-if="store.tempInCelsius < 15 & store.tempInDegrees >= 10" >
      Fait un peu frais mais ça devrait le faire
    </p>
    <p v-else-if="store.tempInCelsius < 10" >Fait gaffe ça caille dehors</p>
    <button id="AuthorizeLocation" type="button" @click="getLocation(coords.latitude,coords.longitude)">My location's weather</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,

.greetings h3 {
    text-align: center;
  }
.greetings{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.greetings button {
  margin-top: 20px;
}

#AuthorizeLocation{
  background-color: var(--color-background);
  border-color: var(--color-text);
  border-radius: 5px;
  border-style: solid;
  color: var(--color-text);
  cursor: pointer;
  padding: 5px;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  .greetings h2 {
    text-align: left;
  }

  .greetings p {
    text-align: left;
  }
  .greetings button {
    text-align: left;
  }
}
</style>
