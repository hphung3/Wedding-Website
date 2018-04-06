<template>
  <nav>
    <v-toolbar class="hidden-sm-and-down">
        <router-link to="/">
          <v-toolbar-title class="title">{{title}}</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link to="/rsvp" id="rsvp">
            <v-btn flat class="rsvp">RSVP</v-btn>
          </router-link>
      </v-toolbar-items>
    </v-toolbar>

    <div class="hidden-md-and-up">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header"><router-link to="/">{{title}}</router-link></div>
          <v-card>
            <router-link to="/rsvp" id="rsvp">
              <v-card-text class="rsvp-sm">RSVP</v-card-text>
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
  data() {
    return {
      title: "Anna Tran & Harrison Phung"
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.header {
  color: black;
}

.toolbar {
  background: #e0e0e0;
  min-width: 500px;
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

.rsvp-sm {
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
}

#rsvp {
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

</style>
