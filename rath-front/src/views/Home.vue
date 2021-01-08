<template>

  <div class="home">
    <Banner/>
    
  </div>
  <div class="main">
    <div class="contenido">
      <h2>LO MAS NUEVO</h2>

      <div class="cont__lo-mas-nuevo">
        <ContProductos/>
      </div>
    <div class="division"></div>
    </div>
  </div>


</template>

<script>
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import ContProductos from '../components/ContProductos.vue'

export default {
  name: 'Home',
  components: {
    Nav, Banner, ContProductos
  }
}
</script>
<style lang="scss" scoped>
// VARS
$gris-0: #EBEBEB ;
$gris-1: #DEDEDE;
$gris-2: #B9B9B9;
$gris-3: #878787;
$fondo: #F6F6F6;
$texto: #3B3B3B;
$morado: #8847E2;

 .main{
   width: 100%;
   display: flex;
   justify-content: center;
  

   .contenido{
     width: 92%;

     h2{
       font-size: 25px;
       font-family: sans-serif;
       font-weight: 700;
       color: $texto;
     }

     .division{
       width: 100%;
       height: 1px;
       background: $gris-1;
       margin-top: 40px;
       margin-bottom: 40px;
     }
   }
 }
</style>