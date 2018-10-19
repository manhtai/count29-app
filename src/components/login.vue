<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
          <div class="row">
            <div class="col">
              <div class="text-center">
                  <h1 class="logo-name img-fluid">
                    <img src="../assets/logo.png">
                  </h1>
              </div>
              <div>
                <p>This is the web app for <a href="https://github.com/manhtai/count29" target="_blank" rel="noopener">count29</a> application in ESP8266 NodeMCU board.</p>
              </div>
            </div>
          </div>

          <h5>1. Upload code to your board</h5>
          <p>Visit <a href="https://github.com/manhtai/count29" target="_blank" rel="noopener">count29</a> repo and follow the instruction.</p>

          <h5>2. Setup MQTT server</h5>
          <p>You can setup one MQTT broker for free at <a href="https://www.cloudmqtt.com/" target="_blank" rel="noopener">Cloud MQTT</a>.</p>

          <h5>3. Enter your MQTT credentials</h5>
          <form v-on:submit.prevent="submitLogin">
              <div class="form-group row">
                  <label class="col-3 col-sm-3 col-form-label">Server</label>
                  <div class="col-9 col-sm-9">
                    <input type="type" class="form-control" required placeholder="m15.cloudmqtt.com" v-model="mqtt.server">
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-3 col-sm-3 col-form-label">User</label>
                  <div class="col-9 col-sm-9">
                    <input type="text" class="form-control" required placeholder="abcxyz" v-model="mqtt.user">
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-3 col-sm-3 col-form-label">Password</label>
                  <div class="col-9 col-sm-9">
                    <input type="password" class="form-control" required placeholder="Psssst!" v-model="mqtt.password">
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-3 col-sm-3 col-form-label">Port</label>
                  <div class="col-9 col-sm-9">
                    <input type="number" class="form-control" required placeholder="1883" v-model="mqtt.port">
                  </div>
              </div>

              <p class="text-center text-danger" v-if="error"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{error}}</p>

              <div class="text-center">
                <button type="submit" class="btn btn-success" :disabled="!mqtt.server || !mqtt.user || !mqtt.port || !mqtt.password && isLoading">Connect <i class="fa fa-sign-in" aria-hidden="true" v-if="!isLoading"></i> <i class="fa fa-spinner fa-spin" aria-hidden="true" v-if="isLoading"></i></button>
              </div>
          </form>
      </div>
    </div>
  </div>
</template>


<script>
import router from '../router'
var mqtt = require('mqtt')

export default {
  name: 'login',
  data () {
    return {
      mqtt: {},
      isLoading: false,
      error: ''
    }
  },
  computed: {
    mqttUrl: function () {
      return 'wss://' + this.mqtt.user + ':' + this.mqtt.password + '@' + this.mqtt.server + ':' + this.mqtt.port
    }
  },
  created () {
    if (this.$cookie.get('mqttUrl')) {
      router.push('dashboard')
    }
  },
  methods: {
    submitLogin () {
      this.isLoading = true
      this.error = ''
      // Call MQTT here
      var client = mqtt.connect(this.mqttUrl)
      self = this
      client.on('connect', function() {
        self.$cookie.set('mqttUrl', self.mqttUrl, 360)
        self.isLoading = false
        router.push('dashboard')
        client.end()
      })
      client.on('error', function() {
        self.isLoading = false
        self.error = "Please check your credentials!"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo-name {
    img {
      max-width: 200px;
      margin-top: 30px;
    }
}
</style>
