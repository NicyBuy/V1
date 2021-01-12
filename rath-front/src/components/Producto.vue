<template>
  <div class="Producto">
    <div class="cont__Img">
      
    </div>

    <div class="cont__Nombre">

    </div>

    <div class="cont__Precio">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.Producto {
    width: 160px;
    height: 210px;
    background: #DEDEDE;
    border-radius: 9px;
    -webkit-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
    box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);

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