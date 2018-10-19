<template>
  <p>This will be the dashboard</p>
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
    'user'
  ]),
  created () {
    this.isLoading = false
  },
  methods: {}
}
</script>
