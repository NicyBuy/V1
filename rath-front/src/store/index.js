import {
  createStore
} from 'vuex'

const axios = require('axios').default

export default createStore({
  state: {
    numero: {
      n1: 24,
      n2: 30
    },
    fruta: "manzanin",
    productos: [1,2,3],
  },
  mutations: {
    setprods(state, payload) {
      console.log('buenos dias');
      state.productos = payload 
      console.log(state.productos);
    }
  },

  actions: {
    async GetProducts({commit}) {
      try {
        const res = await axios.get(`http://www.rath-api.online/getproducts`)
        const resDB = await res.data;
        console.log(resDB)
        commit('setprods', resDB)
      } catch (error) {
        console.log(error);
      }


      //.then(response => response.data)
      //.then(productos => context.commit('AgruparProd',productos));
    }
  },
  modules: {}
})





// created () {
//   this.getProducto();
// },

// // Conexion con la base de datos ===============
// methods: {


//  },