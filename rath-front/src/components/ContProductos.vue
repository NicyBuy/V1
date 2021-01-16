<template>
  <div>
    <div class="cont__Productos">
      <Producto
      :nombre="parcial_Products[index].title "
      :precio="parcial_Products[index].price"
      :id="parcial_Products[index]._id"
       v-for="(num, index) in parcial_Products" :key="index"></Producto>
    </div>
    
    <div class="ver-mas" v-on:click="moreProds">ver mas</div>
  </div>
</template>


<script>
import Producto from "../components/Producto.vue";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Producto,
  },
  data() {
    return {
      i: 0,
      numeros: [1, 2, 3, 4],
      contProducts: [],
    };
  },

  computed: {
    ...mapState(["numero", "fruta", "parcial_Products"]),
    ...mapActions(["GetProducts"]),
  },

  methods: {
    
    ...mapMutations(['moreProds']),


    // Metodo con el cual se clasificaran los productos
    Colador(){
      
    }
  },

  created() {
    this.GetProducts;
  },
  mounted() {},
};
</script>




<style lang="scss" scoped>
// VARS
$gris-0: #ebebeb;
$gris-1: #dedede;
$gris-2: #b9b9b9;
$gris-3: #878787;
$fondo: #f6f6f6;
$texto: #3b3b3b;
$morado: #8847e2;

.cont__Productos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.pruebita {
  width: 100%;
  height: 1000px;
}
.ver-mas {
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
  text-decoration: underline;
  margin-bottom: 10px;

  &:hover {
    color: $morado;
    cursor: pointer;
  }
}
</style>