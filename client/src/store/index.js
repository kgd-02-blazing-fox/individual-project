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
      state.money -= payload.price
      state.products[payload.index].stock--
    }
  },
  actions: {
  },
  modules: {
  }
})
