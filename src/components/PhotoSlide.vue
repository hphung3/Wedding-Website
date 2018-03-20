<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in images" :src="item.path" :key="i"></v-carousel-item>
  </v-carousel>
    <!-- <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel> -->
</template>


<script>
export default {
  data () {
    return {
      images: [
          {
            id: 'portrait',
            path: '../assets/charity-dinner-2017.jpg'
          },
          {
            id: 'charity-dinner',
            path: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
          }
        ],
        items: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
        }
      ]
      
    }
  }
}
</script>
