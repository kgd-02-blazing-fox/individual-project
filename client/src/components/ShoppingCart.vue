<template>
  <div class="container col-lg-12 col-md-8 col-sm-12 col-xs-12 border rounded">
    <div class="container mt-2">
    <b><i class="fas fa-shopping-cart fa-lg"> </i> shopping cart</b>
    </div>
    <div class="row">
      <div class="col-4">
        <b>items :</b> {{totalItems}} pc(s)
      </div>
      <div class="col-4">
        <b>total :</b> {{totalPriceInRupiah}}
      </div>
      <div class="col-4">
        <b @click="checkOut"><i class="fas fa-cash-register"></i> checkout </b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
    }
  },
  methods: {
    checkOut () {
      this.$emit('checkout')
    }
  },
  computed: {
    itemsInCart () {
      return this.$store.state.itemsInCart
    },
    totalItems () {
      return this.$store.state.totalItems
    },
    totalPriceInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.$store.state.totalPrice)
    }
  }
}
</script>

<style>

</style>
