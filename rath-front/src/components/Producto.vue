<template>
   <div class="Producto">

     <router-link :to="{name: 'ProductoEspecifico', params: {id:id}}">
     
    <div  class="cont__Img"></div>

    <div class="cont__Nombre">{{ nombre }} </div>

    <div class="cont__Precio">
      {{ precio }}
    </div>
     </router-link>
   </div>
     
    
   
</template>

<script>
export default {
  props: {
    nombre: String,
    precio: Number,
    id:String
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.Producto {
  width: 160px;
  height: 210px;
  background: white;
  border-radius: 9px;
  margin-bottom: 30px;
  -webkit-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
  box-shadow: 10px 10px 14px -16px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  text-decoration: none;

  .cont__Img {
    width: 100%;
    height: 50%;
    background: #000;
  }

  .cont__Nombre {
    width: 100%;
    height: 25%;
    color: black;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    margin-left: 5px;
    align-items: center;
  }

  .cont__Precio {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    color: #8847e2;
    font-size: 23px;
    margin-left: 10px;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>