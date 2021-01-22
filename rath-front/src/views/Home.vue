<template>
  <div class="home">

    <div class="img__Fondo">
      <img :src="imgFondo" alt="">
    </div>

    <Banner />

    <div class="main">
      <div class="contenido">

        <h2>CATEGORIAS</h2>
        <div class="cont__Categorias">
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
        </div>

        <h2>Puede que te guste</h2>
        <div class="cont__Productos">
          <ContProductos />
        </div>
        <br>
      </div>
    </div>
  </div>
  <Footer/>
</template>



<script>
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import ContProductos from '../components/ContProductos.vue'
import BtnCategoria from '../components/BtnCategoria.vue'
import Footer from '../components/Footer.vue'

//IMAGENES
import imgFondo from "../assets/nicybuy/Banners/HomeBanner.png"

export default {
  name: 'Home',
  components: {
    Nav,
    Banner,
    ContProductos,
    BtnCategoria,
    Footer
  },

  data() {
    return {
      imgFondo: imgFondo
    }
  },
}
</script>



<style lang="scss" scoped>

.img__Fondo {
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150%;
    height: 89%;
    transform: translateY(30px);

  }
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;


  .contenido {
    width: 92%;

    h2 {
      font-size: $mobile__big;
      font-family: nicybuy__font-family;
      font-weight: 700;
      color: $nicybuy__texto;
    }

    .division {
      width: 100%;
      height: 1px;
      background: $nicybuy__gris-1;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .cont__Categorias {
      width: 345px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }
  }
}
</style>