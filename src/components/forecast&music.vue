<script setup>
import WelcomeItem from './WelcomeItem.vue';
import ClockIcon from './icons/IconClock.vue';
import MusicIcon from './icons/IconMusic.vue';
import { store } from '@/store/temp.js';

let day=new Date().getDay();

let dayList=["Monday","Thuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let index=day;
if (index===6) {
  index=0;
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ClockIcon />
    </template>
    <template #heading>4-Day Forcast</template>
    <div id="forecast">
      <p to="/about" v-if="store.temp!=='tempInFar' && store.ForcastList.length > 0">{{dayList[index]}}: {{ store.ForcastList[1].day.avgtemp_c }}° </p>
      <p to="/about" v-if="store.temp!=='tempInFar' && store.ForcastList.length > 0">{{dayList[index+1]}}: {{store.ForcastList[2].day.avgtemp_c}}°</p>
      <p to="/about" v-if="store.temp!=='tempInFar' && store.ForcastList.length > 0">{{dayList[index+2]}}: {{store.ForcastList[3].day.avgtemp_c}}°</p>
      <p to="/about" v-if="store.temp!=='tempInFar' && store.ForcastList.length > 0">{{dayList[index+3]}}: {{store.ForcastList[4].day.avgtemp_c}}°</p>

      <p to="/about" v-if="store.temp==='tempInFar' && store.ForcastList.length > 0">{{dayList[index]}}: {{store.ForcastList[1].day.avgtemp_f}}° </p>
      <p to="/about" v-if="store.temp==='tempInFar' && store.ForcastList.length > 0">{{dayList[index+1]}}: {{store.ForcastList[2].day.avgtemp_f}}°</p>
      <p to="/about" v-if="store.temp==='tempInFar' && store.ForcastList.length > 0">{{dayList[index+2]}}: {{store.ForcastList[3].day.avgtemp_f}}°</p>
      <p to="/about" v-if="store.temp==='tempInFar' && store.ForcastList.length > 0">{{dayList[index+3]}}: {{store.ForcastList[4].day.avgtemp_f}}°</p>
    </div>
    
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <MusicIcon />
    </template>
    <template #heading>Today's playlist</template>

    <p v-if="store.tempInCelsius >= 15">Here comes the sun</p>
    <p v-else>Cold Night</p>
    <RouterLink to="/playlist">
      <img v-if="store.tempInCelsius >= 15" src="@/assets/sunny_playlist.jpg" alt="logo"> 
      <img v-else src="@/assets/cold.jpg" alt="logo"> 
    </RouterLink>
    <br />
  </WelcomeItem>

  <!-- <WelcomeItem>
    <audio controls>
      <source src="@/assets/rain/for-when-it-rains-112785.mp3" type="audio/mp3" />
    </audio>
  </WelcomeItem> -->
</template>

<style scoped>
  img{
    height: 225px;
    width: 225px;
  }

  #forecast{
  display: flex;
  flex-direction: column;
  }
</style>
