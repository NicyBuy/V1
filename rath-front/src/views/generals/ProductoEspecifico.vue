<template>
<div class="cont__Imagen"></div>
<div class="main">
  <div class="contenido">
    <div class="nombre-producto">
      Chayomi Redmi
    </div>
    <p class="descripcion-prodcuto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quas repellat voluptas porro numquam modi
      sapiente, qui iusto laboriosam non quibusdam dignissimos et libero. Omnis nam distinctio fuga consequuntur alias!
    </p>
    <a href="#">Saber mas</a>
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
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, esse. Perferendis odio voluptatum error <a href="#">Garantia y Envios</a>
    </p>
  </div>

  <Recomendados/>
</div>

<Footer/>
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

.cont__Imagen{
  width: 100%;
  height: 40vh;
  background:  #B9B9B9;
  z-index: -1;
  transform: translateY(30px);
}


.main{
  width: 100%;
  height: 1200px;
  background:#EBEBEB;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px 20px 0px 0px;
 
  .contenido{
    width: 90%;
    margin-top: 40px;

    .nombre-producto{
      font-size: 25px;
      font-family: sans-serif;
      font-weight: 700;
      color: #8847E2;
    }

    p{
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 500;
    }

    a{
      font-size: 15px;
      font-family: sans-serif;
      color: #8847E2;
      font-weight: 700;
    }

    .cont__Imgs{
      width: 100%;
      height: 70px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .cont-Img{
        width: 20%;
        height: 100%;
        background: #B9B9B9;
        border-radius: 7px;
      }
    }

    
   
  }

  .ver-mas-detalles{
      width: 100%;
      height: 60px;
      background: #DEDEDE;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

        button{
          width: 90%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          background: #DEDEDE;
          cursor: pointer;
          color: #777777;
          font-size: 17px;
          
          font-family: sans-serif;
        }
      
    }

    .cont__Terminos{
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      p{
        width: 90%;
        font-family: sans-serif;
        font-size: 15px;
        a{
          color: black;
          font-weight: 700;
        } 
      }  
    } 

    .Btn-Comprar{
      width: 150px;
      height: 50px;
      font-family: sans-serif;
      font-size: 18px;
      font-weight: 700;
      background: #8847E2;
      border: none;
      color: white;
      border-radius: 10px;
      margin-top: 30px;
      align-self: flex-start;
      margin-left: 20px;
    } 
}


</style>