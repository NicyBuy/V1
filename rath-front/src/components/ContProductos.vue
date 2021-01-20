<template>
  <div class="cont__Productos">
      <Producto Titulo="Realme 6 de 4GB de RAM Y 128GB memoria" :Imagen="imagenDePrueba" Precio="$299.99" />
      <Producto />
      <Producto />
      <Producto />
      <Producto />
      <Producto />
      <Producto />
      <Producto />
  </div>
  <div class="ver-mas">
      ver mas
  </div>
</template>

<script>
import Producto from '../components/Producto.vue'
import imagenDePrueba from '../assets/nicybuy/productos/Realme_6.png'

export default {
    components: {
        Producto,

    },

    data() {
        return {
            imagenDePrueba: imagenDePrueba,
        }
    },

}
</script>

<style lang="scss" scoped>
.cont__Productos {
    width: 345px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.ver-mas {
    width: 100%;
    text-align: center;
    font-size: $mobile__normal2;
    font-family: $nicybuy__font-family;
    text-decoration: underline;
    margin-bottom: 10px;

    &:hover {
        color: $nicybuy__morado;
        cursor: pointer;
    }
}
</style>