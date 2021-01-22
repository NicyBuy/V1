<template>
<div class="  fondo">
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
<style lang="scss" src="@/scss/main.scss" >
</style>

<style lang="scss" scoped >

.fondo{
  background: $nicybuy__fondo;
}
</style>
