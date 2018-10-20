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
              <button type="button" class="btn btn-lg btn-block" v-bind:class="{ 'btn-outline-primary': !pin.val, 'btn-primary': pin.val }" @click="turn" :id="pin.id">{{ pin.id }}</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data () {
    return {
      isLoading: false,
      course: []
    }
  },
  computed: mapGetters([
    'pins'
  ]),
  created () {
    this.isLoading = false
  },
  methods: {
    turn: function (event) {
      this.$store.dispatch('write', {id: event.target.id, val: 0})
    }
  }
}
</script>
