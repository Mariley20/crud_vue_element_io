<template>
  <div id="app">
    <Navbar />
    <!-- <router-view /> -->
    <Child />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Child
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
