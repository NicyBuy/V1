<template>
  <div class="NavButton">
      <img src="../assets/nicybuy.jpg" alt="">
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
    background: white;
    
    cursor: pointer;
    height: 70px;
    width: 70px;
    margin-left: 7px;
    position: fixed;
    
    top: 7px;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0,0,0,0.21);
-moz-box-shadow: 10px 10px 11px -12px rgba(0,0,0,0.21);
box-shadow: 10px 10px 11px -12px rgba(0,0,0,0.21);

img{
    width: 102%;
    height: 165%;
    transform: translateY(-22px);
    object-fit: cover;
}
}

</style>