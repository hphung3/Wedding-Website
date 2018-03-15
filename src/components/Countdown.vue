<template>
    <div>
     <div> {{days}} DAYS</div>
     <div> {{hours}} HOURS</div>
     <div> {{minutes}} MINUTES</div>
     <div> {{seconds}} SECONDS</div>
    </div>
    <!-- <div>{{date}}</div> -->
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
