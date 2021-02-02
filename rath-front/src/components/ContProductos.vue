<template>
<div class="ContProductos">
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
    width: 350px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and(min-width: 380px) {
        width: 370px; 
    }

    @media screen and(min-width: 600px) {
        width: 545px; 
    }

    @media screen and(min-width: 850px) {
        width: 720px; 
    }

    @media screen and(min-width: 1000px) {
        width: 900px;
    }

    @media screen and(min-width: 1300px) {
        width: 1250px;
    }

    @media screen and(min-width: 1500px) {
        width: 1450px;
    }

    @media screen and(min-width: 1600px) {
        width: 1550px;
    }
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