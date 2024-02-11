<script setup>
  import { ref, onMounted, computed } from 'vue';
  import { store } from '@/store/temp.js';
  import SpringDay from '@/assets/sunny/a-sunny-spring-day-153466.mp3'
  import PositiveWay from '@/assets/sunny/positive-way-124550.mp3'
  import SimplePiano from '@/assets/sunny/simple-piano-melody-9834.mp3'
  import dramatic from '@/assets/rain/dramatic-atmosphere-with-piano-and-violin-143149.mp3'
  import rains from '@/assets/rain/for-when-it-rains-112785.mp3'
  import SadSong from '@/assets/rain/sad-song-186190.mp3'
  

  const current = ref({});
  const index = ref(0);
  const isPlaying = ref(false);

  const sound = computed(()=>{
    if (store.tempInCelsius >= 15) {
      const songs = [
        {
          title: 'Spring Day',
          artist: 'Eugeny Bardhyuzha',
          src: SpringDay
        },
        {
          title: 'Positive Way',
          artist: 'Roman Senyk',
          src: PositiveWay
        },
        {
          title: 'Simple Piano',
          artist: 'Daddyz',
          src: SimplePiano
        }
      ];
      return songs
    }else {
      const songs = [
        {
          title: 'Dramatic',
          artist: 'Eugeny Bardhyuzha',
          src: dramatic
        },
        {
          title: 'For when it rains',
          artist: 'Roman Senyk',
          src: rains
        },
        {
          title: 'Sad Song',
          artist: 'Daddyz',
          src: SadSong
        }
      ];
      return songs
    }
  })

  const player = new Audio();

  const play = (song) => {
    if (typeof song.src != "undefined") {
      current.value = song;
      player.src = current.value.src;
    }

    player.play();
    player.addEventListener('ended', function () {
      index.value++;
      if (index.value > sound.length - 1) {
        index.value = 0;
      }

      current.value = sound.value[index.value];
      play(current.value);
    });
    isPlaying.value = true;
    store.music=song.src;
  };

  onMounted(() => {
    current.value = sound.value[index.value];
    player.src = current.value.src;
  });
</script>

<template>
  <div id="btnDiv">
    <button id="playSound" @click="play(music)" v-for="music in sound" :key="music.src">{{music.title}} - {{music.artist}}</button>
  </div>
</template>

<style>
#playSound {
  background-color: var(--color-background);
  border-color: var(--color-text);
  border-width: 0.5px;
  border-left-style:none;
  border-right-style: none;
  color: white;
  cursor: pointer;
  padding: 10px;
}

#btnDiv {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  #test {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
