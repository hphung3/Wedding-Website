<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs3 md3 v-for="i in photoLinks.length-1"  :key="i">

            <img :src='getPhotoLink(i)'>

        </v-flex>
      </v-layout>
  </v-container>
</template>


<script>
/*eslint-disable */
export default {
    data () {
        return {
            photoLinks: [
                {
                    path: require("../../assets/engagement/1.jpg")
                },
                {
                    path: require("../../assets/engagement/2.jpg")
                },
                {
                    path: require("../../assets/engagement/3.jpg")
                },
                {
                    path: require("../../assets/engagement/4.jpg")
                },
                {
                    path: require("../../assets/engagement/6.jpg")
                },
                {
                    path: require("../../assets/engagement/7.jpg")
                },
                {
                    path: require("../../assets/engagement/8.jpg")
                },
                {
                    path: require("../../assets/engagement/9.jpg")
                },
                // {
                //     path: require("../../assets/engagement/10.jpg")
                // },
                {
                    path: require("../../assets/engagement/11.jpg")
                },
                {
                    path: require("../../assets/engagement/12.jpg")
                },
                {
                    path: require("../../assets/engagement/13.jpg")
                },
                {
                    path: require("../../assets/engagement/14.jpg")
                },
                // {
                //     path: require("../../assets/engagement/15.jpg")
                // },
                {
                    path: require("../../assets/engagement/17.jpg")
                },
                // {
                //     path: require("../../assets/engagement/18.jpg")
                // },
                {
                    path: require("../../assets/engagement/19.jpg")
                },
                {
                    path: require("../../assets/engagement/20.jpg")
                },
                {
                    path: require("../../assets/engagement/21.jpg")
                },
                {
                    path: require("../../assets/engagement/22.jpg")
                },
                {
                    path: require("../../assets/engagement/23.jpg")
                },
                {
                    path: require("../../assets/engagement/24.jpg")
                },

                {
                    path: require("../../assets/engagement/25.jpg")
                },
                {
                    path: require("../../assets/engagement/26.jpg")
                },
                {
                    path: require("../../assets/engagement/27.jpg")
                },
                {
                    path: require("../../assets/engagement/28.jpg")
                },
                {
                    path: require("../../assets/engagement/29.jpg")
                },
                {
                    path: require("../../assets/engagement/30.jpg")
                },
                                {
                    path: require("../../assets/engagement/31.jpg")
                },
                                {
                    path: require("../../assets/engagement/32.jpg")
                },
                //                 {
                //     path: require("../../assets/engagement/33.jpg")
                // },
                                {
                    path: require("../../assets/engagement/34.jpg")
                },
                                {
                    path: require("../../assets/engagement/35.jpg")
                },
                                {
                    path: require("../../assets/engagement/36.jpg")
                },
                                {
                    path: require("../../assets/engagement/37.jpg")
                },
                                {
                    path: require("../../assets/engagement/38.jpg")
                },
                //                 {
                //     path: require("../../assets/engagement/39.jpg")
                // },
                                {
                    path: require("../../assets/engagement/40.jpg")
                },
                                {
                    path: require("../../assets/engagement/41.jpg")
                },
                                {
                    path: require("../../assets/engagement/42.jpg")
                },
                {
                    path: require("../../assets/engagement/43.jpg")
                },
                {
                    path: require("../../assets/engagement/44.jpg")
                },
                {
                    path: require("../../assets/engagement/45.jpg")
                },
                {
                    path: require("../../assets/engagement/46.jpg")
                },
                {
                    path: require("../../assets/engagement/47.jpg")
                },
                {
                    path: require("../../assets/engagement/48.jpg")
                },
                


                
                
            ]
        }
    },
    methods: {
        getPhotoLink: function (number){
            return this.photoLinks[number].path
        }

    }
  
}
</script>


<style scoped>

img{
    padding: 2%;
    width: 100%;
    height: auto;
    vertical-align: middle
}

</style>
