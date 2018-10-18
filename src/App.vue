<template>
  <div id="app">
    <img src="./assets/logo.png" height=100>
    <h1>{{ msg }}</h1>
    <p>
      This is a web app for <a href="https://github.com/manhtai/count29" target="_blank" rel="noopener">count29</a> application in ESP8266 NodeMCU board. You have to do these steps in order:
    </p>
    <h3>1. Upload count29 code to your ESP8266 board</h3>
    <ul>
      <li>Visit <a href="https://github.com/manhtai/count29" target="_blank" rel="noopener">count29</a> repo and follow the instruction.</li>
    </ul>
    <h3>2. Setup MQTT server</h3>
    <ul>
      <li>You can setup one MQTT broker for free at <a href="https://www.cloudmqtt.com/" target="_blank" rel="noopener">Cloud MQTT</a> or make your own.</li>
    </ul>
    <h3>3. Enter your MQTT credentials in the box below</h3>
    <ul>
      <li>Server <input v-model="server"></li>
      <li>User <input v-model="username"></li>
      <li>Password <input v-model="password"></li>
      <li>Port <input v-model="port"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to count29 App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
