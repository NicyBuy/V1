<template>
  <div class="NavButton">
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
    background: $gris-1;
    transition: ease-in-out 0.3s;
    z-index: 10;

    cursor: pointer;
    height: 60px;
    width: 60px;
   

    top: 10px;
    right: 7px;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);


    &:hover {
        transform: scale(1.05);
    }
}


</style>