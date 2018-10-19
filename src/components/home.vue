<template>
  <div id="page-wrapper" class="gray-bg">
  <div class="row border-bottom">
  <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
  <div class="navbar-header">
      <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" @click="openMenu()"><i class="fa fa-bars"></i> </a>
  </div>
      <ul class="nav navbar-top-links navbar-right">
          <li>
              <span class="m-r-sm welcome-message"><strong>Welcome!</strong></span>
          </li>
          <li>
              <a @click="logout()">
                  <i class="fa fa-sign-out"></i> Thoát
              </a>
          </li>
      </ul>
  </nav>
  </div>
  <div class="wrapper wrapper-content animated fadeInRight">
      <router-view/>
  </div>
  <div class="footer">
      <div>
          <p class="m-t"> <small>count29 &copy; 2018</small></p>
      </div>
  </div>
  </div>
  </div>
</template>

<script>
import router from '../router'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  created () {
    if (!this.$cookie.get('mqttUrl')) {
      router.push({
        path: '/'
      })
    } else {
      // Call MQTT
    }
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    logout () {
      this.$cookie.delete('mqttUrl')
      router.push('/')
    },
  }
}
</script>
