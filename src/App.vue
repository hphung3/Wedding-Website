<template>
  <div id="app">
    <toolbar></toolbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
import toolbar from './components/mainpage/Toolbar.vue'
import countdown from './components/mainpage/Countdown.vue'
import photoslide from './components/mainpage/PhotoSlide.vue'

export default {
  name: 'app',
  components: {
    toolbar,
    countdown,
    photoslide
  },
  data () {
    return {
      date: 'May 27, 2018'
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