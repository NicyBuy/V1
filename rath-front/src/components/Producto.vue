<template>
  <router-link  to = "/compra" class="Producto">
    <div class="cont__Img">
      
    </div>

    <div class="cont__Nombre">
      {{nombre}}
    </div>

    <div class="cont__Precio">
    {{ precio }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    nombre: String,
    precio: String
  },
}
</script>

<style lang="scss" scoped>

.Producto {
    width: 160px;
    height: 210px;
    background: #DEDEDE;
    border-radius: 9px;
    margin-bottom: 30px;
    -webkit-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    overflow: hidden;

    .cont__Img{
      width: 100%;
      height: 50%;
      background: #000;
    }

    .cont__Nombre{
      width: 100%;
      height: 25%;
      background: grey;
    }

    .cont__Precio{
      width:100%;
      height: 25%;
      background: red;  
    }
}

</style>