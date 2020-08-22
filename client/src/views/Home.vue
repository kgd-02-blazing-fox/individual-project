<template>
  <div class="home">
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
  mounted () {
    this.socket = io.connect('http://localhost:3000')

    this.socket.on('init', (payload) => {
      this.$store.commit('SET_MONEY', payload.money)
      this.$store.commit('SET_PRODUCTS', payload.products)
    })
  }
}
</script>
