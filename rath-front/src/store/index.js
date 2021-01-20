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
    all_Productos: [],
    parcial_Products:[],
    control_vmore:0,
    pruebaState:[]
  },
  mutations: {
    setProds(state, payload) {
      console.log('buenos dias');
      state.all_Productos = payload 
      console.log(state.all_Productos);
      for (let i = state.control_vmore; i < state.control_vmore+2; i++) {
        state.parcial_Products[i] = state.all_Productos[i];
      }
      state.control_vmore +=2;
      console.log(state.parcial_Products);
      
    },
    moreProds(state){
      if(state.control_vmore < state.all_Productos.length){
        for (let i = state.control_vmore; i < state.control_vmore+2; i++) {
          state.parcial_Products.push(state.all_Productos[i])
        }
        state.control_vmore += 2;
        console.log('se ejecuto moreProds')
        console.log(state.parcial_Products)
      }else console.log('no hay mas por mostrar wacho')
    },
    loadOne(state, payload){
      console.log('buenos dias');
      state.pruebaState = payload 
      console.log(state.pruebaState);
    }
  },

  actions: {
    async GetProducts({commit}) {
      try {
        const res = await axios.get(`http://www.rath-api.online/getproducts`)
        const resDB = await res.data;
        commit('setProds', resDB)
      } catch (error) {
        console.log(error);
      }


      //.then(response => response.data)
      //.then(productos => context.commit('AgruparProd',productos));
    },
    async GetOne({commit}, payload) {
      console.log(payload)
      console.log('se mostro shit')
      try {
        const res = await axios.get(`http://www.rath-api.online/`+payload);
        const resDB = await res.data.product;
        console.log(resDB)
        commit('loadOne', resDB)
      } catch (error) {
        console.log(error);
      }


      //.then(response => response.data)
      //.then(productos => context.commit('AgruparProd',productos));
    },
    
  },
  modules: {}
})





// created () {
//   this.getProducto();
// },

// // Conexion con la base de datos ===============
// methods: {


//  },