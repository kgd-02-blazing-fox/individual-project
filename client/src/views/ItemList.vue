<template>
  <div class="container border rounded" id="containerColor">
    <div class="position-sticky sticky-top colini">
      <Alert
      v-if="alert.isOn === true"
      :message="alert.message"
      />
      <Checkout
      v-if="isCheckout"
      @close="closeCheckout"
      />
      <h5 class="">DIBAYARIN PAK ARNOLD</h5>
      <h1><i class="fas fa-money-bill"></i> {{moneyInRupiah}} </h1>
      <ShoppingCart
      @checkout="openCheckout"
      />
    </div>
    <div class="row">
      <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import io from 'socket.io-client'
import ItemCard from '../components/ItemCard'
import ShoppingCart from '../components/ShoppingCart'
import Alert from '../components/Alert'
import Checkout from '../components/Checkout'

export default {
  name: 'ItemList',
  data () {
    return {
      isCheckout: false
    }
  },
  components: {
    ItemCard,
    ShoppingCart,
    Alert,
    Checkout
  },
  methods: {
    openCheckout () {
      this.isCheckout = true
    },
    closeCheckout () {
      this.isCheckout = false
    },
    newChange (payload) {
      this.$store.dispatch('addToChart', payload)
    }
  },
  created () {
    this.$store.dispatch('fetchItems')
  },
  computed: {
    items () {
      const sortByIndex = this.$store.state.items
      return sortByIndex.sort((a, b) => a.id - b.id)
    },
    moneyInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.$store.state.MONEY)
    },
    alert () {
      return this.$store.state.alert
    }
  },
  mounted () {
    this.socket = io.connect('http://localhost:3000')

    this.socket.on('init', function () {
      console.log('CLIENT CONNECTED IN ITEMLIST')
    })

    this.socket.on('newChange', (payload) => {
      this.newChange(payload)
    })
  }
}
</script>

<style scoped>
#containerColor{
  background-color: #dfe6e9;
}

.colini{
  background-color: #DFE6E9;
}
</style>
