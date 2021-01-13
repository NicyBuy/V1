<template>
  <div class="home">
    <Banner />
  </div>
  <div class="main">
    <div class="contenido">
      <h2  >LO MAS NUEVO {{ numero.n2 }}</h2>

      <div class="cont__lo-mas-nuevo">
        <ContProductos />
      </div>

      <div class="division"></div>

      <h2>CATEGORIAS</h2>
      <div  class="cont__Categorias">
        <BtnCategoria />
        <BtnCategoria />
        <BtnCategoria />
        <BtnCategoria />
        <BtnCategoria />
        <BtnCategoria />
      </div>

      <div @click = "GetProducts" class="muestra__Categorias"></div>
    </div>
  </div>
  <Footer />
</template>



<script>
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import ContProductos from '../components/ContProductos.vue'
import BtnCategoria from '../components/BtnCategoria.vue'
import Footer from '../components/Footer.vue'
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    Nav, 
    Banner,
    ContProductos,
    BtnCategoria,
    Footer
  },

  computed: {
    ...mapState(['numero', 'fruta']),
    // ...mapActions(['GetProducts']),
  },


  // created() {
  //   this.GetProducts
  // }
 
}
</script>



<style lang="scss" scoped>
// VARS
$gris-0: #ebebeb;
$gris-1: #dedede;
$gris-2: #b9b9b9;
$gris-3: #878787;
$fondo: #f6f6f6;
$texto: #3b3b3b;
$morado: #8847e2;

.main {
  width: 100%;
  display: flex;
  justify-content: center;

  .contenido {
    width: 92%;

    h2 {
      font-size: 25px;
      font-family: sans-serif;
      font-weight: 700;
      color: $texto;
    }

    .division {
      width: 100%;
      height: 1px;
      background: $gris-1;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .cont__Categorias {
      width: 345px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .muestra__Categorias {
      width: 100%;
      height: 600px;
      background: $gris-2;
      margin-top: 20px;
    }
  }
}
</style>