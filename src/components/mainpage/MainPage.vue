<template>
  <div id="app">
    <toolbar></toolbar>
    <countdown :date=date></countdown>
    <photoslide></photoslide>
  </div>
</template>

<script>
import toolbar from './Toolbar.vue'
import countdown from './Countdown.vue'
import photoslide from './PhotoSlide.vue'

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
}

html, body {
    margin: 0;
    height: 100%;
    background-color: #B7C2D8;
}
</style>
