import { createStore } from 'vuex'

const axios = require('axios').default

export default createStore({
  state: {
    numero: {
      n1: 24,
      n2: 30
    },


    fruta: "manzanin",
    productos:[],
  },
  mutations: {
  },

  actions: {
    async GetProducts(){
     const res = await axios.get(`http://www.rath-api.online/getproducts`)
    console.log(res.data)
    }
  },
  modules: {
  }
})





// created () {
//   this.getProducto();
// },

// // Conexion con la base de datos ===============
// methods: {

     
//  },