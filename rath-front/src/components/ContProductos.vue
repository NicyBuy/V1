<template>
  <div class="cont__Productos">
            <Producto  v-for="num in 8" :key="num"></Producto>    
  </div>
       
  
  <div class="ver-mas">
      ver mas
  </div>
</template>




<script>
import Producto from '../components/Producto.vue'

import {
    mapState,
    mapActions
} from 'vuex';


export default {
    components: {
        Producto,
    },
    data() {
        return {
            i: 0,
            numeros:[
                1,2,3,4
            ]
        }
    },

    computed: {
        ...mapState(['numero', 'fruta']),
        ...mapActions(['GetProducts']),
    },

    methods: {
        GenerarProducto() {
            
        }
    },

    created() {
        this.GetProducts
    }
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

.cont__Productos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
}

.pruebita{
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