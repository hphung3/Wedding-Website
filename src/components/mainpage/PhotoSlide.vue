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
            id: 'wedding-portrait',
            path: require('../../assets/wedding-portrait.jpg')
          },
          {
            id: 'family-photo',
            path: require('../../assets/family-photo.jpg')
          },
          {
            id: 'family-photo-2',
            path: require('../../assets/family-photo-2.jpg')
          },

        ]
      
    }
  }
}
</script>

<style scoped>
  img{
    max-width:80%;
    max-height:80%;
  }
</style>
