<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
          <div class="row">
            <div class="col">
              <div class="text-center">
                  <h1 class="logo-name img-fluid">
                    <img src="../assets/logo.png">
                  </h1>
              </div>
            </div>
          </div>

          <div class="row justify-content-center" v-for="row in [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]">
            <div class="col-md-3 mt-3" v-for="(pin, index) in pins" v-if="row.indexOf(index) > -1">
              <button type="button" class="btn btn-lg btn-block" v-bind:class="{ 'btn-outline-primary': pin.val == 0, 'btn-primary': pin.val == 1 }" @click="turn" :id="pin.id" :val="pin.val">{{ pin.id }}</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
var mqtt = require('mqtt')
import { mapGetters } from 'vuex'
import router from '../router'

export default {
  name: 'dashboard',
  data () {
    return {
      isLoading: false,
      client: null
    }
  },
  computed: mapGetters([
    'pins'
  ]),
  created () {
    if (!this.$store.getters.mqttUrl) {
      router.push({ path: '/' })
    }
    this.client = mqtt.connect(this.$store.getters.mqttUrl)
    var self = this
    this.client.on('connect', function () {
      self.client.subscribe('inTopic', function (err) {
        if (err) router.push({ path: '/' })
      })
      self.client.subscribe('outTopic', function (err) {
        if (err) router.push({ path: '/' })
      })
    })

    this.client.on('message', function (topic, message) {
      if (topic == 'outTopic') {
        message.toString().split(' ').map(pin => {
          let [id, val] = pin.split(':')
          if (val) {
            self.$store.dispatch('writePin', {id: id, val: val})
          }
        })
      }
    })
  },
  methods: {
    turn: function (event) {
      this.client.publish('inTopic', event.target.id)
    }
  }
}
</script>
