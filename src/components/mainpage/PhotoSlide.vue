<template>
    <carousel :perPage=1 :autoplay=true :paginationEnabled=false>
        <slide v-for="image in images" :key="image.id">
          <img :src="image.path">
        </slide>
    </carousel>
</template>


<script>
/*eslint-disable */
import { Carousel, Slide } from 'vue-carousel';

export default {
  components:{
    Carousel,
    Slide
  },
  data () {
    return {
      images: [
          {
            id: 'wedding-outside',
            path: require("../../assets/wedding/wedding-couple-outside.jpg")
          }
        ]
      
    }
  }
}
</script>

<style scoped>
  img{
    max-width:80%;
    max-height:75%;
    min-width: 50%;
  }
</style>
