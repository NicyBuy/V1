<template>
  <div>
    <div class="cont__Productos">
      <Producto v-for="num in 8" :key="num"></Producto>
    </div>
    {{ productos[0].price }}
    <div class="ver-mas" v-on:click="pamostrar">ver mas</div>
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
    ...mapState(["numero", "fruta", "productos"]),
    ...mapActions(["GetProducts"]),
  },

  methods: {
    pamostrar: function () {
      console.log("desde el mounted");
      this.contProducts = this.productos;
      console.log(this.productos);
    },
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