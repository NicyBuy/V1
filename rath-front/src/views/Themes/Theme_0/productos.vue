<template>
<div class="productos">
    <Banner/>
    <div class="main">

        <h2>CATEGORIAS</h2>
        <div class="cont__Categories">
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
          <BtnCategoria />
        </div>
        <h2>LO MEJOR PARA TI</h2>
        <div class="cont__Productos">
            <ContProductos/>
        </div>

    </div>
</div>
 
</template>

<script>
import Banner from '../../../components/Tiendas/Banner.vue';
import BtnCategoria from '../../../components/BtnCategoria.vue'
import ContProductos from '../../../components/ContProductos.vue'
export default {
components: {
    Banner,
    BtnCategoria,
    ContProductos
},
}
</script>

<style lang='scss' scoped>

.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(255, 106, 131);
    color: white;

    .cont__Categories {
      width: 345px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }
}




</style>