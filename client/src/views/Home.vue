<template>
  <div class="home">
    <div class="container">
      <Profile />
      <Dompet />
      <div class="products">
        <div class="row justify-content-center">
          <ProductCard
            v-for="(product,i) in products"
            :key="i"
            :index="i"
            :product="product"
            @updatedItem="updatedItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import Profile from '../components/Profile'
import Dompet from '../components/Dompet'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    updatedItem (payload) {
      this.socket.emit('updated-item', payload)
    }
  },
  components: {
    Profile,
    Dompet,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
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

<style>
  .products{
    max-width: 1200px;
    padding: 25px;
    background-color: white;
  }
</style>
