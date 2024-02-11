<script>
import { store } from '@/store/temp.js';

export default {
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div>
    <form>
    <fieldset> 
      <legend>UNITS</legend>
      <input type="radio" value="tempInCelsius" v-model="store.temp"/>
      <label >Celsius</label>
      <br>
      <input type="radio" value="tempInFar" v-model="store.temp" />
      <label >Farenheit</label>
    </fieldset>

  </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  /* div {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
