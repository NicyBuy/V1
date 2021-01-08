<template>
  <div class="cont__Productos">
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
  </div>
  <div class="ver-mas">
      ver mas
  </div>
</template>

<script>
import Producto from '../components/Producto.vue'
export default {
components: {
    Producto,
},
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

.cont__Productos{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.ver-mas{
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: sans-serif;
    text-decoration: underline;
    margin-bottom: 10px;

    &:hover{
        color: $morado;
        cursor: pointer;
    }
}
</style>