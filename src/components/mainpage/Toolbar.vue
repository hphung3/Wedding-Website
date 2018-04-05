<template>
  <v-toolbar>
      <span id="title">{{title}}</span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <router-link to="/rsvp" id="rsvp">
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
      title: "Anna Tran & Harrison Phung"
    };
  }
};
</script>

<style scoped>
.toolbar {
  background: #e0e0e0;
  min-width: 500px;
}

#title {
  font-size: 100%;
  width: 100px;
}
.rsvp {
  font-weight: 700;
  font-size: 180%;
  letter-spacing: 1px;
  padding: 10px 0px;
  color: black;
  text-decoration: none;
}

#rsvp{
  height: auto;
  text-decoration: none;
  align-content: center
}

</style>
