<template>
<div class="fondo">
<Nav/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</div>

</template>

<script>
import Nav from '../src/components/Nav.vue'
export default {
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped>
// VARS
$gris-0: #EBEBEB ;
$gris-1: #DEDEDE;
$gris-2: #B9B9B9;
$gris-3: #878787;
$fondo: #f0f0f0;
$texto: #3B3B3B;
$morado: #8847E2;

.fondo{
  background: $fondo;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }

</style>
