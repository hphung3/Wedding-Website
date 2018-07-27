<template>

  <div>
    <engagementvideo></engagementvideo>
    <photoshootGallery></photoshootGallery>
  </div>
</template>

<script>
import engagementvideo from "./EngagementVideo.vue";
import photoshootGallery from "./PhotoshootGallery.vue"

export default {
  components:{
      engagementvideo,
      photoshootGallery
    }

}
</script>

<style scoped>
iframe{
  width: 90%;
  height: 300px;
}
html,
body {
  height: fill;
  margin: 0;
  padding: 0;
  background-color: #e0e0e0;
}
</style>
