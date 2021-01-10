<template>
  <h2>Recomendados</h2>

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

$morado: #8847E2;
h2{
    font-family: sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
}
.cont__Productos{
    width: 345px;
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