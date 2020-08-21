<template>
  <div class="container" id="checkout">
    <div class="row border">
      <div class="col">
        <h4><b>YOUR ITEM LIST</b></h4>
        <div class="row">
          <div class="col">ITEM</div>
          <div class="col">HARGA</div>
        </div>
        <CheckoutList
        class="rounded"
        v-for="item in items"
        :key="item.id"
        :item="item"
        />
        <div class="row" id="bigger">
          <div class="col">SUBTOTAL</div>
          <div class="col"><b>{{sumInRupiah}}</b></div>
        </div>
        <div class="row">
          <div class="col">
            <h1 v-if="items.length >= 1" class="btn btn-dark"
              @click="checkout"
              ><b><i class="fas fa-money-bill-wave"> </i> CHECKOUT !!</b></h1>
            <h1 @click="close" class="btn btn-danger"><b> cancel </b></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutList from '../components/CheckoutList'
export default {
  name: 'Checkout',
  data () {
    return {
      total: 0
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  components: {
    CheckoutList
  },
  computed: {
    items () {
      return this.$store.state.itemsInCart
    },
    sumInRupiah () {
      const sum = this.$store.state.itemsInCart
      let count = 0
      sum.forEach(el => {
        count += el.price
      })
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(count)
    }
  }
}
</script>

<style scoped>
#checkout{
  background-color: #7f8c8d;
  color: #ecf0f1;
  position: absolute;
  z-index: 2;
}
#bigger{
  font-size: 35px;
}
h4{
  color: #2c3e50;
}
</style>
