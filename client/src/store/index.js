import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    products: []
  },
  mutations: {
    SET_MONEY (state, value) {
      state.money = value
    },
    SET_PRODUCTS (state, allProduct) {
      state.products = allProduct
    },
    BUY_PRODUCT (state, payload) {
      console.log('Hai juga', payload.index)
      console.log('Hai juga', payload.product.price)
      console.log('Hai juga', state.products[payload.index].stock)
      state.money -= payload.product.price
      state.products[payload.index].stock--
    }
  },
  actions: {
  },
  modules: {
  }
})
