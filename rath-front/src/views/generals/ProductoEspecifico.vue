<template>
<div class="cont__Imagen"></div>
<div class="main">
  <div class="contenido-principal">
    <div class="nombre-producto">
      Chayomi Redmi
    </div>

    <div class="descripcion-producto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quas repellat voluptas porro numquam modi
      sapiente, qui iusto laboriosam non quibusdam dignissimos et libero. Omnis nam distinctio fuga consequuntur alias!
      <br>
      <br>
      <button class="saber-mas">Saber mas</button>
    </div>

    <div class="cont__Imgs">
      <div class="cont-Img"></div>
      <div class="cont-Img"></div>
      <div class="cont-Img"></div>
      <div class="cont-Img"></div>
    </div>

  </div>


  <div class="ver-mas-detalles">
    <button>
      Mas Detalles
    </button>
  </div>

  <button class="Btn-Comprar">
    COMPRAR
  </button>

  <div class="cont__Terminos">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, esse. Perferendis odio voluptatum error <a
        href="#">Garantia y Envios</a>
    </p>
  </div>

  <Recomendados />
</div>

<Footer />
</template>



<script>
import Recomendados from '../../components/Recomendados.vue'
import Footer from '../../components/Footer.vue'
export default {
  components: {
    Recomendados,
    Footer
  },
}
</script>



<style lang="scss" scoped>

.cont__Imagen {
  width: 100%;
  height: 40vh;
  background: $nicybuy__gris-3;
  z-index: -1;
}


.main {
  width: 100%;
  height: 1200px;
  background: $nicybuy__fondo;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px 20px 0px 0px;
  transform: translateY(-30px);

  .contenido-principal {
    width: 90%;
    margin-top: 40px;

    .saber-mas {

      border: none;
      background: none;
      color: $nicybuy__morado;

    }

    .nombre-producto {
      font-size: $mobile__big;
      font-family: sans-serif;
      font-weight: 700;
      color: $nicybuy__morado;
    }

    .descripcion-producto {
      font-size: $mobile__small;
      font-family: $nicybuy__font-family;
      font-weight: 500;
      margin-top: 5px;
    }

    a {
      font-size: $mobile__small;
      font-family: $nicybuy__font-family;
      color: $nicybuy__morado;
      font-weight: 700;
    }

    .cont__Imgs {
      width: 100%;
      height: 70px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .cont-Img {
        width: 20%;
        height: 100%;
        background: $nicybuy__gris-2;
        border-radius: 7px;
      }
    }



  }

  .ver-mas-detalles {
    width: 100%;
    height: 60px;
    background: $nicybuy__gris-1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background: $nicybuy__gris-1;
      cursor: pointer;
      color: #777777;
      font-size: $mobile__normal;

      font-family: $nicybuy__font-family;
    }

  }

  .cont__Terminos {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 90%;
      font-family: $nicybuy__font-family;
      font-size: $mobile__small;
      color: $nicybuy__texto;

      a {
        color: $nicybuy__texto;
        font-weight: 700;
      }
    }
  }

  .Btn-Comprar {
    width: 150px;
    height: 50px;
    font-family: $nicybuy__font-family;
    font-size: 18px;
    font-weight: 700;
    background: $nicybuy__morado;
    border: none;
    color: white;
    border-radius: 10px;
    margin-top: 30px;
    align-self: flex-start;
    margin-left: 20px;
  }
}


</style>