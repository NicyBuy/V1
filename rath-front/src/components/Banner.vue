<template>
  <div class="Banner">
    <div class="cont__Title">
      LO MEJOR PARA TI
    </div>

    <div class="cont__Featured">
      <div class="item">
      </div>

        <div class="item">
          <div class="cont__Img">
            <img :src="Fonken" alt="">
            <div class="div"></div>
          </div>

          <div class="cont__Info">
            <div class="cont">
              <div class="Title">
                Funda Protectora contra agua
              </div>
              <div class="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit culpa sed quidem autem veniam?
              </div>
              <div class="cont__Button">
                <button>ver mas</button>
              </div>
            </div>
          </div>
        </div>

        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
  </div>
</template>

<script>
import Fonken from '../assets/productos/Fonken.png'
  export default {

    components: {
      Fonken
    },

    data() {
      return {
        Fonken: Fonken
      }
    },

    mounted:
      function () {
        const slider = document.querySelector(".cont__Featured");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add("active");
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        })

        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove("active");
        })

        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove("active");
        })

        slider.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;

          const walk = (x - startX);
          slider.scrollLeft = scrollLeft - walk;
        })

        function abrirVentana() {
          window.open("pagina.html")
        }

      },
    };
</script>

<style lang="scss" scoped>

.Banner{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: $nicybuy__font-family;

  .cont__Title{
  font-size: $big;
  font-weight: 700;
  color: white;
  width: 100%;
  height: 10%;
  margin-bottom: 10px;

   @media screen and(max-width: 1000px) {
      font-size: $mobile__huge;
    }
}

.cont__Featured{
  width: 100%;
  height: 80%;
   overflow-x: scroll;
    justify-content: center;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    transition: all 0.3s ease-in-out;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

  .item{
    width: 300px;
    height: 100%;
    margin-left: 20px;
    border-radius: 9px;
    background: white;
    margin-bottom: 10px;
    display: inline-flex;
    overflow: hidden;

    @media screen and(max-width: 1000px) {
      width: 250px;
    }

     @media screen and(max-width: 1000px) {
      width: 200px;
    }
      
    .cont__Img{
      width: 100%;
      height: 100%;
      display: grid;
      grid: 100% / 100%;
      overflow: hidden;
    
      
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-area: 1/1/2/2;
        transition: all 0.5s ease-in-out;
      }

      .div{
        grid-area: 1/1/2/2;
        z-index: 2;
      }


    }

    .cont__Info{
      width: 14%;
      height: 100%;
      border-radius: 9px;
      background: rgba(255, 255, 255, 0.842);
      position: absolute;
      transform: translateY(100%);
      transition: all 0.3s ease-in-out;
      transition-delay: 0.7s;

      display: flex;
      justify-content: center;
      align-items: center;

      .cont{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        

        .Title{
          width: 100%;
          height: 20%;
          white-space: pre-wrap;
          font-size: $mobile__big;
          color: $nicybuy__morado;
          overflow: hidden;
          font-weight: 700;
        }

        .description{
          width: 100%;
          height: 20%;
          
          white-space: pre-wrap;
          font-size: $mobile__normal;
          color: $nicybuy__texto;

        }

        .cont__Button{
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: center;
          align-items: center;

          button{
            width: 50%;
            height: 60%;
            font-size: $mobile__normal2;
            border: none;
            border-radius: 10px;
            background: $nicybuy__morado;
            font-weight: 700;
            color: white;
            cursor: pointer;
            position: relative;

            &:hover{
              background: #7037be; ;
            }
          }
        }

      }
    }


    &:hover .cont__Info{
      transform: translateY(40%);
    }

    &:hover img{
      transform: scale(1.03);
    }
}
  
}
}

.active{
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1.03);
    
}


</style>