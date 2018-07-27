<template>
    <div class="grid-container">
        <div class="header">DAYS</div>
        <div class="header">HOURS</div>
        <div class="header">MINUTES</div>
        <div class="header">SECONDS</div>
        <div class="number"> {{days | doubleDigit}} </div>      
        <div class="number"> {{hours | doubleDigit}}</div>
        <div class="number"> {{minutes | doubleDigit}}</div>
        <div class="number"> {{seconds | doubleDigit}}</div>
    </div>

</template>

<script>
export default {
  props:{
      date: {
          type: String
      }
  },
  data () {
      return{
          now: Math.trunc((new Date().getTime() / 1000)),
          weddingDay: Math.trunc((Date.parse(this.date) / 1000))
      }
  },
  created () {
      setInterval(() => {this.now = Math.trunc((new Date().getTime() / 1000))}, 1000)
  },
  computed:{
      days: function() {
        return Math.trunc(((this.now - this.weddingDay) / 60 / 60 / 24 ))
      },
      hours: function() {
        return Math.trunc(((this.now - this.weddingDay) / 60 / 60) % 24)
      },
      minutes: function() {
        return Math.trunc(((this.now-this.weddingDay) / 60) % 60)
      },
      seconds: function() {
        return (this.now - this.weddingDay) % 60
      },
  },
  filters: {
      doubleDigit: function(value){
          if(value < 10){
              return '0'+value.toString()
          }else{
              return value
          }
      }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Ultra');
    .grid-container{
        display: grid;

        padding-top: 1%;
        padding-left: 10%;
        padding-right:10%;
        margin-bottom: 1%;

        grid-template-columns: repeat(4,25%);
        grid-template-rows: 30px 1fr;

        height: 60%;
        font-family: 'Ultra', serif;

        min-width: 400px;
    }

    .header{
        padding-top: 3%;
        font-size: 1em;
    }
    .number{
        border-radius: 10%;
        background-color: #D0D0D0;
        font-size: 3em;
        margin: 0 20%;
        font-family: 'Ultra', serif;
        min-width: 70px;
    }

</style>