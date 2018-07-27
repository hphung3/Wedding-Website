<template>
  <div>
    <div id="title">Happily Married!</div>
    <countdown :date=date></countdown>
    <photoslide></photoslide>
  </div>
</template>

<script>
import countdown from "./Countdown.vue";
import photoslide from "./PhotoSlide.vue";

export default {
  components: {
    countdown,
    photoslide
  },
  data() {
    return {
      date: "May 27, 2018"
    };
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Great+Vibes');


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  height: 100%;
  background-color: #b7c2d8;
  width: auto;
}

#title{
  padding: 10px 0 0 0;
  font-size: 4em;
  min-width: 400px;
  font-family: 'Great Vibes', cursive;
}
</style>
