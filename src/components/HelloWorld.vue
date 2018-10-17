<template>
  <div class="hello">
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
    <p>Here...</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
