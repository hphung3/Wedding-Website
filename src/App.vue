<template>
  <div id="app">
    <toolbar></toolbar>
    <countdown :date=date></countdown>
    <img src="./assets/wedding-portrait.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import toolbar from './components/Toolbar.vue'
import countdown from './components/Countdown.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
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
  margin-top: 60px;
}
img{
  max-width:100%;
  max-height:100%;

}
</style>
