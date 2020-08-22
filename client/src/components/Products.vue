<template>
  <div class="products">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <!-- <div class="col-sm-4">
        <img src="https://neal.fun/spend/images/big-mac.jpg" alt="">
        <h5>Big Mac</h5>
        <p>Rp15.000</p>
        <div class="row">
          <div class="col-sm-6">
            <button class="btn btn-outline-dark">56</button>
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <img src="https://neal.fun/spend/images/big-mac.jpg" alt="">
        <h5>Big Mac</h5>
        <p>Rp15.000</p>
        <div class="row">
          <div class="col-sm-6">
            <button class="btn btn-outline-dark">56</button>
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .products{
    max-width: 900px;
    padding: 25px;
  }
</style>
