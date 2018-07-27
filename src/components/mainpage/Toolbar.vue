<template>
  <nav class="toolbar">
    <v-toolbar class="hidden-sm-and-down">
        <router-link to="/">
          <v-toolbar-title class="title">{{title}}</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link to="/engagement" id="engagement">
            <v-btn flat class="engagement-tab">Engagement</v-btn>
          </router-link>
          <!-- <router-link to="/rsvp" id="rsvp">
            <v-btn flat class="rsvp">RSVP</v-btn>
          </router-link> -->

          <router-link to="/wedding" id="wedding">
            <v-btn flat class="wedding-tab">Wedding</v-btn>
          </router-link>

      </v-toolbar-items>
    </v-toolbar>

    <div class="hidden-md-and-up">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header"><router-link to="/">{{title}}</router-link></div>
          <v-card>
          <router-link to="/engagement" id="engagement">
              <v-card-text class="rsvp-sm">Engagement</v-card-text>
            </router-link>
          </v-card>
          <!-- <v-card>
            <router-link to="/rsvp" id="rsvp">
              <v-card-text class="rsvp-sm">RSVP</v-card-text>
            </router-link>
          </v-card> -->
          <v-card>
            <router-link to="/wedding" id="wedding">
              <v-card-text class="rsvp-sm">Wedding</v-card-text>
            </router-link>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </nav>
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
  data () {
    return {
      title: "Anna Tran & Harrison Phung"
    };
  }
};
</script>

<style scoped>
nav{
  width: fill;
}
a {
  text-decoration: none;
  color: black;
}

.header {
  color: black;
}

.title {
  font-size: 100%;
  color: black;
}

.rsvp {
  font-weight: 700;
  font-size: 180%;
  letter-spacing: 1px;
  padding: 10px 0px;
  color: black;
  text-decoration: none;
}

.engagement-tab, .wedding-tab {
  font-weight: 700;
  font-size: 180%;
  padding: 10px 0px;
  color: black;
  text-decoration: none;
}

.rsvp-sm {
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
}

#rsvp, #engagement , #wedding{
  height: auto;
  text-decoration: none;
  align-content: center
}

.expansion-panel {
  background: #e0e0e0;
}

.card__text {
  padding-left: 25px;
}

.toolbar{
  width: auto;
}


</style>
