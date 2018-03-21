<template>
  <!-- <v-carousel>
    <v-carousel-item v-for="(item,i) in images" :src="item.path" :key="i"></v-carousel-item>
  </v-carousel> -->
    <!-- <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel> -->
    <carousel>
        <slide v-for="image in images" :key="image.id">
          <img :src="image.path">
        </slide>
    </carousel>
    
</template>


<script>
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
            id: 'charity-dinner',
            path: require('../assets/charity-dinner-2017.jpg')
          },
          {
            id: 'wedding-portrait',
            path: require('../assets/wedding-portrait.jpg')
          }
        ]
      
    }
  }
}
</script>

<style scoped>

  img{
    height: fill;
    width: fill;
  }
</style>
