<template>
  <div @click="open =! open"  class="NavButton">
      <img src="../assets/nicybuy.jpg" alt="">
  </div>


  <div :class="Open" class="cont__Nav-links">

      <div class="Nav-links"> 
          <div class="Btn__nav-link">
              <router-link class="nav-link" to="/">INICIO</router-link>
          </div>

          <div class="Btn__nav-link">
              <router-link class="nav-link" to="/about">INFORMACION</router-link>
          </div>
      </div>

  </div>
</template>



<script>
export default {
    data() {
        return {
            open: false
        }
    },

  computed: {
      Open() {
          return{
              open: this.open
          }
          
      }
  },
}
</script>



<style lang="scss" scoped>
// VARS
$gris-0: #EBEBEB;
$gris-1: #DEDEDE;
$gris-2: #B9B9B9;
$gris-3: #878787;
$fondo: #F6F6F6;
$texto: #3B3B3B;
$morado: #8847E2;



.NavButton {
    border-radius: 100%;
    background: white;
    transition: ease-in-out 0.3s;
    z-index: 10;

    cursor: pointer;
    height: 70px;
    width: 70px;
    margin-left: 7px;
    position: fixed;

    top: 7px;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);

    img {
        width: 102%;
        height: 165%;
        transform: translateY(-22px);
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
    }
}

.cont__Nav-links {
    position: fixed;
    background: $morado;
    height: 100vh;
    width: 100%;
    clip-path: circle(2% at 10% 5%);
    -webkit-clip-path: circle(10% at 10% 10%);
    transition: all 0.6s ease-in-out;
    pointer-events: none;

}

.Nav-links {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .Btn__nav-link {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid #632eac 1px;

        .nav-link {
            color: white;
            text-decoration: none;
            font-size: 20px;
            font-family: sans-serif;
            font-weight: 600;
        }
    }

    

}

.open{
     clip-path: circle(80% at 10% 10%);
    pointer-events: all;
 }

</style>