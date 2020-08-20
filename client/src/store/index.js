import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    ItemList: [],
    ImageUrl: 'https://i.ibb.co/VQKDCjQ/Arnold.jpg'
  },
  mutations: {
    setMoney (state, val) {
      state.money = val
    },
    setItemList (state, list) {
      state.ItemList = list
    },
    resetImage (state) {
      state.ImageUrl = 'https://i.ibb.co/VQKDCjQ/Arnold.jpg'
    },
    buyItem (state, obj) {
      state.money -= obj.price
      state.ItemList[obj.index].stock--
      if (obj.index === 8) { const sound = new Audio(require('../assets/S.webm')); sound.volume = 0.2; sound.play().then(res => {}).catch(err => console.log(err)) }
      if (obj.index === 7) { const sound = new Audio(require('../assets/A.webm')); sound.volume = 0.2; sound.play().then(res => {}).catch(err => console.log(err)) }
      if (obj.index === 3) { const sound = new Audio(require('../assets/H.webm')); sound.volume = 0.2; sound.play().then(res => {}).catch(err => console.log(err)) }
      if (state.money <= 500000000000 && state.money > 250000000000) state.ImageUrl = 'https://i.ibb.co/f4476dR/Arnold50.jpg'
      else if (state.money <= 250000000000 && state.money > 0) state.ImageUrl = 'https://i.ibb.co/gwgG2nv/Arnold75.jpg'
      else if (state.money === 0) state.ImageUrl = 'https://i.ibb.co/zn6nvry/Arnold100.jpg'
      state.ItemList.map(item => {
        if (state.money - item.price < 0 || !item.stock) {
          item.status = true
        }
      })
    },
    seedItem (state, seed) {
      state.money = seed.money
      state.ItemList = seed.stock
    },
    changeItem (state, obj) {
      state.money -= obj.price
      state.ItemList[obj.index].stock--
      if (state.money <= 500000000000 && state.money > 250000000000) state.ImageUrl = 'https://i.ibb.co/f4476dR/Arnold50.jpg'
      else if (state.money <= 250000000000 && state.money > 0) state.ImageUrl = 'https://i.ibb.co/gwgG2nv/Arnold75.jpg'
      else if (state.money === 0) state.ImageUrl = 'https://i.ibb.co/zn6nvry/Arnold100.jpg'
      state.ItemList.map(item => {
        if (state.money - item.price < 0 || !item.stock) {
          item.status = true
        }
      })
    }
  },
  getters: {
    toRpStore (state) {
      const value = state.money
      if (value === '') return 'Rp. 0,00'
      let count = String(value).length % 3
      if (count === 0) count = 3
      let cont = 'Rp. '
      for (let i = 0; i < String(value).length; i++) {
        cont += String(value)[i]
        count--
        if (count === 0) {
          i === String(value).length - 1 ? cont += '.' : cont += ','
          count = 3
        }
      }
      return cont + '00'
    }
  }
})
