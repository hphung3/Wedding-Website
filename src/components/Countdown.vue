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
        return Math.trunc(((this.weddingDay - this.now) / 60 / 60 / 24 ))
      },
      hours: function() {
        return Math.trunc(((this.weddingDay - this.now) / 60 / 60) % 24)
      },
      minutes: function() {
        return Math.trunc(((this.weddingDay - this.now) / 60) % 60)
      },
      seconds: function() {
        return (this.weddingDay - this.now) % 60
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
    .grid-container{
        padding-top: 1%;
        display: grid;
        padding-left: 15%;
        padding-right:15%;
        grid-template-columns: repeat(4,25%);
        grid-template-rows: 30px 1fr;
        height: 60%;

    }

    .header{
        font-size: 1em;
    }
    .number{
        background-color: #D0D0D0;
        font-size: 2.5em;
        padding: 10% 5%;
    }

</style>