<template>
  <div class="container border rounded">
    <h5 class="mt-2">BAPAK ARNOLD PUNYA UANG</h5>
    <h1><i class="fas fa-money-bill"></i> {{moneyInRupiah}} </h1>
    <ShoppingCart/>
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
import ItemCard from '../components/ItemCard'
import ShoppingCart from '../components/ShoppingCart'

export default {
  name: 'ItemList',
  data () {
    return {
      money: 1000000000
    }
  },
  components: {
    ItemCard,
    ShoppingCart
  },
  created () {
    this.$store.dispatch('fetchItems')
  },
  computed: {
    items () {
      return this.$store.state.items
    },
    moneyInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.money)
    }
  }
}
</script>
