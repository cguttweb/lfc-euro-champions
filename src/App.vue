<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/rome77">Rome 1977</router-link> |
    <router-link to="/wembley78">Wembley 1978</router-link> |
    <router-link to="/paris81">Paris 1981</router-link> |
    <router-link to="/rome84">Rome 1984</router-link> |
    <router-link to="/istanbul05">Istanbul 2005</router-link> |
    <router-link to="/madrid19">Madrid 2019</router-link>
  <router-view />
  <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
