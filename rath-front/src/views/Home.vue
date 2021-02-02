<template>
  <div class="home">
    <div class="Background">

      <div class="cont__Title">

        <div class="Title">
          NICYBUY TRAE LO MEJOR PARA TI
        </div>

      </div>

      <div class="img__Background">
        <img :src="imgFondo" alt="">
      </div>
    </div>


    <div class="Banner">
      <div class="cont__Destacados">
        <div class="Destacados">
         <Banner/>
        </div>
      </div>

      <div class="cont__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,224C1248,256,1344,288,1392,304L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
          </path>
        </svg>
      </div>
    </div>

    <div class="main">
      <div class="contenido">

        <h2>CATEGORIAS</h2>
        <div class="cont__Categories">
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
    <Footer />
  </div>
  
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
.Background {
  width: 100%;
  height: 70vh;
  display: grid;
  grid: 100% /40% 60%;

  @media screen and(max-width: 1410px) {
    grid: 100% /50% 50%;
    height: 60vh;
  }

  @media screen and(max-width: 1300px) {
    grid: 100% /40% 60%;

  }

  @media screen and(max-width: 940px) {
    grid: 100% /100%;

  }



  .cont__Title {

    font-family: $nicybuy__font-family;
    font-weight: 700;
    color: $nicybuy__texto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $banner;

    @media screen and(max-width: 940px) {
      display: none;

    }


    @media screen and(max-width: 1764px) {
      font-size: $huge;
    }

    @media screen and(max-width: 1410px) {
      font-size: $big;
    }




    .Title {
      width: 80%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  .img__Background {

    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      height: 80%;
      object-fit: cover;

      @media screen and(max-width: 1410px) {
        height: 70%;
        width: 95%;
      }

      @media screen and(max-width: 940px) {
        height: 100%;
        width: 100%;
        transform: translateY(30px);
      }

      @media screen and(max-width: 455px) {
        height: 90%;
        width: 100%;
        transform: translateY(30px);

      }
    }
  }
}

.Banner {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .cont__wave {
    width: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;

    svg {
      fill: $nicybuy__morado;
    }
  }

  .cont__Destacados {
    width: 100%;
    height: 650px;
    margin-top: 0px;
    background: $nicybuy__morado;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

     @media screen and(max-width: 1000px) {
      height: 500px;
    }

     @media screen and(max-width: 500px) {
      height: 450px;
    }

    .Destacados {
      width: 90%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

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

    .cont__Categories {
      width: 345px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }
  }
}
</style>