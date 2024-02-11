<script setup>
import { store,CurrentWeatherCity, ForecastWeatherCity } from '@/store/temp.js';

const search=(e)=>{
  CurrentWeatherCity(e.target.value)
  ForecastWeatherCity(e.target.value)
  if (store.music !== "") {
    store.music.pause()
  }
  
}

</script>

<template>
  <input id="searchBar" placeholder="enter city" @keyup.enter="search"/>
</template>

<style>
@media (min-width: 1024px) {
  /* div {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
  #searchBar{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
  }
}
</style>
