<template>
  <div class="home">
    <!-- <h1>Wasap</h1>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="message" placeholder="Enter your message.." autocomplete="off">
      <input type="submit" value="send">
    </form> -->
    <div class="container">
      <Profile />
      <Dompet />
      <Products />
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import Profile from '../components/Profile'
import Dompet from '../components/Dompet'
import Products from '../components/Products'

export default {
  name: 'Home',
  data () {
    return {
      message: ''
    }
  },
  components: {
    Profile,
    Dompet,
    Products
  },
  methods: {
    sendMessage () {
      this.socket.emit('new-message', { message: this.message })
    }
  },
  mounted () {
    this.socket = io.connect('http://localhost:3000')

    this.socket.on('init', (payload) => {
      this.$store.commit('SET_MONEY', payload.money)
      console.log('money: Rp.', payload.money)
      console.log('products: ', payload.products)
      console.log('init invoked')
    })
  }
}
</script>
