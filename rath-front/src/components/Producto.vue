<template>
  <div class="Producto">
    <div class="cont__Img">
        <img :src="Imagen" alt="">
    </div>

    <div class="cont__Titulo">
      {{Titulo}}
    </div>

    <div class="cont__Precio">
      {{Precio}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Titulo: {
      type: String,
      default: "Nombre del Producto"
    },

    Imagen: {
      type: String,
      default: "Imagen"
    },

     Precio: {
      type: String,
      default: "Precio"
    },
  },
}
</script>

<style lang="scss" scoped>

.Producto {
    width: 160px;
    height: 210px;
  
    border-radius: 9px;
    margin-bottom: 23px;
    -webkit-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    display: grid;
    grid:  50% 10% 17% 23%/ 100%;
    overflow: hidden;
    font-family: sans-serif;

    .cont__Img{
      grid-area: 1/1/4/2;
      overflow: hidden;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .cont__Titulo{
      background: rgba(255, 255, 255, 0.747);
      grid-area: 2/1/4/2;
      padding: 4px;
    }

    .cont__Precio{
      background: white;
      grid-area: 4/1/5/2;
      font-size: 20px;
      font-weight: 700;
      color:  #8847E2;
      padding-right: 7px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
}

</style>