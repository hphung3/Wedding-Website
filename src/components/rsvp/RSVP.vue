
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
      <br>
      <p>5:00 PM</p>
      <h2>Ceremony</h2>
      <p>The Factory Atlanta</p>
      <p>5616 New Peachtree Rd, Chamblee, GA 30341</p>
      <br>
      <p>6:00 PM</p>
      <h2>Reception</h2>
      <p>Canton House</p>
      <p>4825 Buford Hwy NE, Chamblee, GA 30341</p>
      <p class= "line">________________________________________</p>


      <v-form class="v-form">
      <v-text-field 
        :class="name" 
        label="Full Name" 
        v-model="name"
        value="Input text"
        ></v-text-field>

      <v-text-field 
        class="number-of-guests" 
        label="# of Guests (including yourself)" 
        v-model="numberOfGuests">
      </v-text-field>

      <label>Choose an option:</label>
      <v-checkbox
      :label="`happily accepts (both ceremony and reception)`"
      v-model="ceremonyAndReceptionCheckBox">
      </v-checkbox>
      <v-checkbox
      :label="`happily accepts (reception only)`"
      v-model="receptionCheckBox">
      </v-checkbox>
      <v-checkbox
      :label="`regretfully declines`"
      v-model="declineCheckBox">
      </v-checkbox>
    </v-form>
      
    <div class="response-button-group">
      <button class ="accept" @click="submitAndGoHome">Submit</button>
    </div>
    </div>

  </div>
</body>
</template>


<script>
/* eslint-disable */
import axios from "axios";

axios.defaults.crossDomain = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
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
  methods: {
    submitAndGoHome: function() {
      //TODO: do a call to backend and validate
      axios
        .post(this.rsvpUrl, this.rsvpRequest)
        .then(function(response) {
          window.location.href = "/";
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {
    name: function(val, oldVal) {
      this.rsvpRequest.fullName = val;
    },
    numberOfGuests: function(val, oldVal) {
      this.rsvpRequest.numberOfGuests = val;
    },
    ceremonyAndReceptionCheckBox: function(val, oldVal) {
      if (val == true) {
        this.rsvpRequest.acceptance = "Ceremony And Reception";
      }
    },
    receptionCheckBox: function(val, oldVal) {
      if (val == true) {
        this.rsvpRequest.acceptance = "Reception Only";
      }
    },
    declineCheckBox: function(val, oldVal) {
      if (val == true) {
        this.rsvpRequest.acceptance = "Regretfully Declines";
      }
    }
  },
  data() {
    return {
      name: "",
      numberOfGuests: "",
      ceremonyAndReceptionCheckBox: false,
      receptionCheckBox: false,
      declineCheckBox: false,
      rsvpRequest:{
        fullName: "",
        numberOfGuests: "",
        acceptance: "",
      },
      rsvpUrl:
        "http://wedding-website-backend.mxwzqw3mfp.us-east-2.elasticbeanstalk.com/rsvp"
    };
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");

html,
body {
  height: 100%;
  min-width: 500px;
  margin: 0;
  padding: 0;
  background-color: #e0e0e0;
  font-family: "Raleway";
}

.top {
  background-color: #b7c2d8;
  height: 200px;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
}

.form {
  width: 450px;
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
  width: auto;
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

button {
  color: #666;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 600;
  padding: 15px 32px;
  width: fill;
  margin: 20px auto;
  float: left;
}

.response-button-group {
  display: flex;
  margin: 0px auto;
  width: 100%;
}
button.accept {
  border-radius: 10px;
  background-color: #e0e0e0;
  margin: 0px 5px;
}

button:hover {
  background-color: #cc919a;
  transition: 0.5s;
}

button:focus {
  outline: 0;
}

label {
  display: block;
  margin-bottom: 10px;
}

.v-form {
  width: 85%;
  margin: 0px 10px;
}

.input-group label {
  font-size: 15px;
  max-width: 100%;
}
.input-group.input-group--selection-controls label {
  max-width: 100%;
}
</style>
