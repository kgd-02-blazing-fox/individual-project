<template>
  <div class="card col-sm-3" style=" margin:5x;padding-top:15px; padding-bottom:15px;" >
    <img :src="product.image_url" alt="" style="height: 8em;">
      <h5 style="font-weight:bold; margin-top:20px;">{{ product.name }}</h5>
      <p>Rp. {{ price }}</p>
      <div class="row">
        <div class="col-sm-6">
          <button class="btn btn-outline-dark" style="min-width:100px;">{{ product.stock }}</button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-success" @click.prevent="buyProduct({index, product})">Buy</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
    index: Number
  },
  computed: {
    price () {
      const numberString = this.product.price.toString()
      const sisa = numberString.length % 3
      let rupiah = numberString.substr(0, sisa)
      const ribuan = numberString.substr(sisa).match(/\d{3}/g)
      if (ribuan) {
        const separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }
      return rupiah
    }
  },
  methods: {
    buyProduct (payload) {
      // console.log('Hai')
      // console.log(payload.index)
      // console.log(payload.product.price)
      this.$store.commit('BUY_PRODUCT', payload)
      this.$emit('updatedItem', payload)
    }
  }
}
</script>

<style>
  button{
    min-width:100px;
  }
</style>
