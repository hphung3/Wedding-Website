<template>
    <div class="grid-container">
        <div>DAYS</div>
        <div>HOURS</div>
        <div>MINUTES</div>
        <div>SECONDS</div>
        <div> {{days}} </div>      
        <div> {{hours}}</div>
        <div> {{minutes}}</div>
        <div> {{seconds}}</div>
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
  }
}
</script>

<style scoped>
    .grid-container{
        padding-top: 1%;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: 30px 1fr;
        height: 100px;
    }


</style>