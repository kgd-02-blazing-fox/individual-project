import Vue from 'vue'
import Vuex from 'vuex'
import ServerAPI from '../axios/ServerAPI'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
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
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally((_) => {
          console.log('FETCHED')
        })
    },
    updateItem (context, data) {
      ServerAPI({
        method: 'PUT',
        url: '/' + data.id,
        data: {
          name: data.name,
          image_url: data.image_url,
          price: data.price,
          stock: data.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
          router.push('/')
        })
        .finally((_) => {
          console.log('what?')
        })
    }
  }
})
