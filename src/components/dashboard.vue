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
    this.isLoading = true
    let now = new Date().getTime()
    this.$http.get(config.api.studentCourse).then((res) => {
      this.course = res.body
      this.isLoading = false
      this.course.forEach((item) => {
        if (new Date(item.start_date).getTime() < now) {
          item.active = true
        }
        return item
      })
    })
  },
  methods: {}
}
</script>
