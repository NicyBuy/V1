<template>
  <div class="Banner">
    <div class="cont__Title">
      LO MEJOR PARA TI
    </div>

    <div class="cont__Featured">
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
        <div class="item"></div>
        <div class="item"></div>
    </div>
  </div>
</template>

<script>
  export default {

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
    height: 90%;
    margin-left: 20px;
    border-radius: 9px;
    background: white;
    margin-bottom: 10px;
    display: inline-flex;

    @media screen and(max-width: 1000px) {
      width: 250px;
    }

     @media screen and(max-width: 1000px) {
      width: 200px;
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