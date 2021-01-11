<template>
  <nav>
      <div class="Logo">
          <img src="../assets/nicybuy.jpg" alt="">
      </div>

      <div class="Nombre">
          NICYBUY Tomasito del rio
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
    height: 10vh;
    background-color: $gris-0;
    display: flex;
    justify-content: flex-start;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    position: fixed;
    z-index: 10;


    .Nombre {
        align-self: center;
        font-size: 25px;
        font-family: sans-serif;
        font-weight: 700;
        margin-left: 10px;
        color: $morado;
    }


    .Logo {
        border-radius: 100%;
        background: white;
        transition: ease-in-out 0.3s;
        height: 55px;
        width: 55px;
        align-self: center;
        overflow: hidden;
        margin-left: 5px;

        img {
            width: 102%;
            height: 165%;
            transform: translateY(-19px);
            object-fit: cover;
        }
    }
}

</style>