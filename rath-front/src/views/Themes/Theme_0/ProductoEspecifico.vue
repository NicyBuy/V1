<template>
<div class="cont__Imagen"></div>
<div class="main">
  <div class="contenido-principal">
    <div class="nombre-producto">
      Hola Wapo
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

    <div class="Tienda">
      De: <router-link to="#" class="Tienda__nombre">Nombre Tienda</router-link>
    </div>

    <div class="Precio">
      Precio:
      <span>$45.99</span>
    </div>

    <div class="Contacto__vendedor">
      Contactar Vendedor
      <div class="cont__RS">
        <a href="" class="RS instagram">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
        </a>
        <a href="" class="RS facebook">
         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
        </a>
        <a href="" class="RS whatsapp">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
        </a>
      </div>
    </div>

  </div>



  <Garantia/>

  <Recomendados />
</div>

<Footer />
</template>



<script>
import Recomendados from '../../../components/Recomendados.vue'
import Footer from '../../../components/Footer.vue'
import Garantia from '../../../components/other/Garantia.vue'

export default {
  components: {
    Recomendados,
    Footer,
    Garantia
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
  background: $nicybuy__fondo;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px 20px 0px 0px;
  transform: translateY(-30px);
  font-family: $nicybuy__font-family;
  background: rgb(255, 106, 131);
  color: white;

  .contenido-principal {
    width: 90%;
    margin-top: 40px;

    .saber-mas {

      border: none;
      background: none;
      color: rgb(255, 232, 130);
      font-weight: 700;

    }

    .nombre-producto {
      font-size: $mobile__big;
      font-family: sans-serif;
      font-weight: 700;
      color: rgb(255, 232, 130);
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
      color: white;
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

    .Tienda{
      height: 120px;
      width: 250px;
      display: flex;
      align-items: center;

     .Tienda__nombre{
       margin-left: 10px;
       background: rgb(255, 232, 130);
       padding: 10px;
       border-radius: 7px;
      color: black;
      text-decoration: none;
     }
    }

    .Precio{
      width: 200px;
      height: 50px;
      display: flex;
      flex-direction: column;

      span{
        font-size: $mobile__huge;
        font-weight: 700;
        color: $nicybuy__morado;
      }
    }

    .Contacto__vendedor{
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: $mobile__normal2;
      font-weight: 700;
      color: $nicybuy__texto;
      margin-top: 30px;

      .cont__RS{
        width: 160px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;


        .RS{
          width: 40px; 
        }

        .facebook{
            fill: rgb(71, 71, 255);
          }

          .whatsapp{
            fill: rgb(130, 204, 57);
          }

          .instagram{
            fill: rgb(206, 90, 109);
          }
      }
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
}


</style>