
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
        <div id = "full-name">
          <v-text-field 
            class="input-group--focused"
            label="Full Name" 
            v-model="name"
            value="Input text"
            required
            :rules="[rules.required]"
            ></v-text-field>
        </div>

    <div id='number-of-guests'>
      <v-text-field 
        class="input-group--focused"
        label="# of Guests (including yourself)" 
        value="Input tfwafwfext"
        :rules="[rules.required]"
        required
        v-model="numberOfGuests">
      </v-text-field>
      </div>

      <br>

      <label>Choose an option:</label>
      <v-checkbox

      :label="`both ceremony and reception`"
      v-model="ceremonyAndReceptionCheckBox">
      </v-checkbox>
      <v-checkbox

      :label="`reception only`"
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

      <v-snackbar
      :timeout="timeout"
      :top="top"
      v-model="snackbar">
      {{ snackText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    
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
        if(!this.rsvpRequest.fullName || !this.rsvpRequest.numberOfGuests || !this.rsvpRequest.acceptance){
          alert("Please fill in Required fields :)")
          return
        }
      axios
        .post(this.rsvpUrl, this.rsvpRequest)
        .then(function(response) {
          alert("SUCCESSFUL RSVP!")
          window.location.href = "/";
        })
        .catch(function(error) {
          alert("ERROR OCCURED")
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
        this.receptionCheckBox = false;
        this.declineCheckBox = false;
        this.rsvpRequest.acceptance = "Ceremony And Reception";
      } else{
        this.rsvpRequest.acceptance = ""
      }
    },
    receptionCheckBox: function(val, oldVal) {
      if (val == true) {
        this.ceremonyAndReceptionCheckBox = false;
        this.declineCheckBox = false;
        this.rsvpRequest.acceptance = "Reception Only";
      } else{
        this.rsvpRequest.acceptance = ""
      }
    },
    declineCheckBox: function(val, oldVal) {
      if (val == true) {
        this.receptionCheckBox = false;
        this.ceremonyAndReceptionCheckBox = false;
        this.rsvpRequest.acceptance = "Regretfully Declines";
      } else{
        this.rsvpRequest.acceptance = ""
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
      snackbar: false,
      snackText: 'Hello, I\'m a snackbar',
      timeout: 2000,
      top: true,
      rsvpRequest: {
        fullName: "",
        numberOfGuests: "",
        acceptance: ""
      },
      rsvpUrl:
        "http://wedding-website-backend.mxwzqw3mfp.us-east-2.elasticbeanstalk.com/rsvp",
      rules: {
        required: value => !!value || "Required Field"
      },


    };
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway");

html,
body {
  height: 100%;
  overflow: unset;
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
  background-color: #fff;
  margin: -150px 5% 15px 5%;
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

  margin-bottom: 10px;
  float: left;
}

.v-form {
  width: 100%;
  margin: 0px 0px 0px 10px;
}

#full-name, #number-of-guests{
  width: 95%
}

</style>
