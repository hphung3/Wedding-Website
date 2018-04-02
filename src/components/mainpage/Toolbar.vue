<template>
  <v-toolbar>
      <span id="title">{{title}}</span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <router-link to="/rsvp">
        <v-btn flat class="rsvp">RSVP</v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  data() {
    return {
      title: "Harrison Phung & Anna Tran Wedding Website"
    };
  }
};
</script>

<style scoped>
.toolbar {
  background: #e0e0e0;
}

#title {
  font-size: 130%;
}
.rsvp {
  font-weight: 700;
  font-size: 200%;
  letter-spacing: 1px;
}
</style>
