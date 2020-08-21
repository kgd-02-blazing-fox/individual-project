import Vue from 'vue'
import Vuex from 'vuex'
import ServerAPI from '../axios/ServerAPI'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    MONEY: 1000000000,
    itemsInCart: [],
    totalPrice: 0,
    totalItems: 0,
    alert: {
      isOn: false,
      message: ''
    }
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
    ADD_TO_CART (state, payload) {
      state.itemsInCart.push(payload)
      state.MONEY -= payload.price
      state.totalPrice += payload.price
      state.totalItems = state.itemsInCart.length
    },
    ALERT (state, payload) {
      state.alert = {
        isOn: true,
        message: payload
      }
      setTimeout((_) => {
        state.alert = {
          isOn: false,
          message: payload
        }
      }, 3000)
    },
    RESET_SHOP_CART (state) {
      state.MONEY = 1000000000
      state.itemsInCart = []
      state.totalPrice = 0
      state.totalItems = 0
    }
  },
  actions: {
    fetchItems (context) {
      ServerAPI({
        method: 'GET',
        url: '/'
      })
        .then(({ data }) => {
          context.commit('SET_ITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally((_) => {
          console.log('FETCHED')
        })
    },
    updateItem (context, data) {
      console.log(data)
      ServerAPI({
        method: 'PUT',
        url: '/' + data.id,
        data: {
          stock: data.stock - 1
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchItems')
        })
        .catch((err) => {
          console.log(err)
          context.commit('ALERT', 'fail occur')
        })
        .finally((_) => {
          console.log('what?')
        })
    },
    addToChart (context, data) {
      if (this.state.MONEY - data.price < 0) {
        context.commit('ALERT', 'INSUFFICIENT MONEY!')
      } else if (data.stock <= 0) {
        context.commit('ALERT', 'ITEM OUT OF STOCK!')
      } else {
        context.commit('ADD_TO_CART', data)
        context.dispatch('updateItem', data)
      }
    },
    checkout (context, data) {
      router.push('/thanks')
    },
    reset (context) {
      context.commit('RESET_SHOP_CART')
    }
  }
})
