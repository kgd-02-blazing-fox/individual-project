<template>
  <div class="container border rounded">
    <div class="container mt-2">
    <b><i class="fas fa-shopping-cart fa-lg"></i></b>
    </div>
    <div class="row">
      <div class="col-4">
        <b>items :</b> {{totalItems}} pc(s)
      </div>
      <div class="col-8">
        <b>total :</b> {{totalPriceInRupiah}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
      totalPrice: 123456789,
      totalItems: 99,
      itemsInCart: []
    }
  },
  computed: {
    totalPriceInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.totalPrice)
    }
  }
}
</script>

<style>

</style>
