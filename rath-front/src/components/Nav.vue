<template>
<NavButton/>
  <nav>
      <div class="Nombre">
          NICYBUY
      </div>
  </nav>
</template>

<script>
import NavButton from '@/components/NavButton.vue'

export default {

components: {
    NavButton,
},
}
</script>

<style lang="scss" scoped>
// VARS
$gris-0: #EBEBEB;
$gris-1: #DEDEDE;
$gris-2: #B9B9B9;
$gris-3: #878787;
$fondo: #F6F6F6;
$texto: #3B3B3B;
$morado: #8847E2;

nav {
    width: 100%;
    height: 85px;
    background-color: $gris-0;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);

    .Nombre {
        align-self: center;
        font-size: 25px;
        font-family: sans-serif;
        font-weight: 700;
        color: $morado;
    }
}

</style>