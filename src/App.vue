<template>
  <div id="app">
    <toolbar></toolbar>
    <countdown :date=date></countdown>

    <br>

    <div>
    <img src='./assets/wedding-portrait.jpg'>
    </div>

    <!-- <photoslide></photoslide> -->

      <v-carousel>
    <v-carousel-item v-for="(item,i) in images" :src="item.path" :key="i"></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
import toolbar from './components/Toolbar.vue'
import countdown from './components/Countdown.vue'
import photoslide from './components/PhotoSlide.vue'

export default {
  name: 'app',
  components: {
    toolbar,
    countdown,
    photoslide
  },
  data () {
    return {
      date: 'May 27, 2018',
      images: [
          {
            id: 'portrait',
            path: './assets/wedding-portrait.jpg'
          },
          {
            id: 'charity-dinner',
            path: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
          }
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #B7C2D8;
}
img{
  max-width:80%;
  max-height:80%;

}
</style>
