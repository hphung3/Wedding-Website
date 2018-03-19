<template>
  <div id="app">
    <toolbar></toolbar>
    <countdown :date=date></countdown>


    <div>
    <img src="./assets/wedding-portrait.jpg">
    </div>
  </div>
</template>

<script>
import toolbar from './components/Toolbar.vue'
import countdown from './components/Countdown.vue'

export default {
  name: 'app',
  components: {
    toolbar,
    countdown
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
