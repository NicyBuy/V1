<template>
  <div class="NavButton">
   <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
  </div>

</template>



<script>

export default {
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



.NavButton {
    border-radius: 100%;
    background: $morado;
    transition: ease-in-out 0.3s;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    cursor: pointer;
    height: 60px;
    width: 60px;
   

    top: 10px;
    right: 12px;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);

  svg{
    fill: white;
  }
    
}


</style>