<template>
  <div class="card col-sm-4" style="padding-top:15px; padding-bottom:15px;">
    <img :src="product.image_url" alt="" style="height: 8em;">
      <h5>{{ product.name }}</h5>
      <p>Rp{{ product.price }}</p>
      <div class="row">
        <div class="col-sm-6">
          <button class="btn btn-outline-dark" style="min-width:100px;">{{ product.stock }}</button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-success" @click.prevent="buyProduct({index,price,stock})">Buy</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    buyProduct (payload) {
      this.$store.commit('BUY_PRODUCT', payload)
      this.$emit('itemChanges', payload)
    }
  }
}
</script>

<style>
  button{
    min-width:100px;
  }
</style>
