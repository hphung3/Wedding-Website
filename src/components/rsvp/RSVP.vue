<template>
  <body>
  <div class="top">
  </div>
  <div class="form">
    <div class ="info">
    <h1>RSVP</h1>
    <h2>for the wedding of</h2>
    <h1>Anna Tran & Harrison Phung</h1>
      <p class= "line">________________________________________</p>
      <p>Sunday, May 27, 2018</p>
      <p>5:00 PM</p>
      <h2>Ceremony</h2>
      <p>The Factory Atlanta</p>
      <p>5616 New Peachtree Rd, Chamblee, GA 30341</p>
      <h2>Reception</h2>
      <p>Canton House</p>
      <p>4825 Buford Hwy NE, Chamblee, GA 30341</p>
      <p class= "line">________________________________________</p>


      <v-form class="v-form">
      <!-- <input type="text" placeholder="Name"> -->
      <v-text-field :class="name" label="Full Name" v-model="name"></v-text-field>
      <v-text-field 
        :class="number-of-guests" 
        label="# of Guests (including yourself)" 
        v-model="numberOfGuests">
      </v-text-field>
          <v-checkbox
      :label="`Ceremony`"
      v-model="ceremonyCheckBox"
    ></v-checkbox>
        <v-checkbox
      :label="`Reception`"
      v-model="receptionCheckBox"
    ></v-checkbox>
    </v-form>
    </div>

    <button class ="accept">Accept</button>
    <button class ="regret">Regret</button>

  </div>
</body>
</template>


<script>
export default {
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  data() {
    return {
      name: '',
      numberOfGuests: '',
      ceremonyCheckBox: false,
      receptionCheckBox: false
    };
  }
};
</script>


<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #bdc3c7;
  font-family: "Raleway";
}
.top {
  background-color: #B7C2D8;
  height: 200px;
  margin: 0;
  padding: 0;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
}

.form {
  /* height: 590px; */
  width: 420px;
  background-color: #fff;
  margin: -110px auto;
  border-radius: 10px;
  color: #666;
  padding: 0px 0px;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
}

.info {
  padding: 10px;
  height: auto;
}

h1,
h2,
p {
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
}

h2 {
  font-family: "Great Vibes", cursive;
  font-weight: 100;
}

p.line {
  margin: 0px auto 20px auto;
  color: #999;
}

name {
  margin: 25px auto 20px;
}

input:focus {
  outline: 0;
}

.button button {
  display: inline-block;
  width: 400px;
}
button {
  color: #666;
  background-color: #ffbdc7;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 600;
  padding: 15px 32px;
  width: 200px;
  margin: 20px auto;
  float: left;
}

button.accept {
  border-radius: 10px;
  border-right: solid 1px #cc919a;
  margin-left: auto;
}

button.regret {
  border-radius: 10px;
}

button:hover {
  background-color: #cc919a;
  transition: 0.5s;
}

button:focus {
  outline: 0;
}

v-form {
  width: 85%;
  margin: 20px auto;
}
</style>
