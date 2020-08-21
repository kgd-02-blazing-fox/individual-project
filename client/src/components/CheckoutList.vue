<template>
  <div id="bgcol">
    <div class="row">
      <div class="col">{{item.name}}</div>
      <div class="col">{{moneyInRupiah}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutList',
  props: ['item'],
  computed: {
    moneyInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.item.price)
    }
  }
}
</script>

<style scoped>
#bgcol{
  background-color: #ecf0f1;
  color: #2c3e50;
}
</style>
