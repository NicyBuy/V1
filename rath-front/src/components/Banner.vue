<template>
  <div class="Banner">
    <div class="cont__Destacados">
      <div class="Destacados">
        <h2>LO MEJOR PARA TI</h2>
        <div class="producto-destacado">
        </div>

      </div>
      <h3>ver mas</h3>
    </div>

    <div class="cont__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,224C1248,256,1344,288,1392,304L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {

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
.Banner{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
   
   .cont__wave{
     width: 100%;
     overflow: hidden;
     margin: 0px;
     padding: 0px;

     svg{
       fill: $morado;
     }
   }

   .cont__Destacados{
     width: 100%;
     height: 450px;
     margin-top: 0px;
     background: $morado;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     .Destacados{
       width: 90%;
       height: 70%;
       display: flex;
       flex-direction: column;
       align-items: center;
       
       .producto-destacado{
        height: 270px;
        width: 200px;
        background: white;
        border-radius: 9px;
       }
     }

     h2{
       font-size: 20px;
       font-family: sans-serif;
       font-weight: 700;
       color: white;
     }

     h3{
       font-size: 18px;
       font-family: sans-serif;
       font-weight: 700;
       color: white;
     }
   }
}
</style>