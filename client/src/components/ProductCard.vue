<template>
  <div class="col-sm-4">
    <img src="https://neal.fun/spend/images/big-mac.jpg" alt="">
      <h5>{{ product.name }}</h5>
      <p>Rp{{ product.harga }}</p>
      <div class="row">
        <div class="col-sm-6">
          <button class="btn btn-outline-dark">{{ product.stock }}</button>
          <button class="btn btn-success">Buy</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}
</script>

<style>

</style>
