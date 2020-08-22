<template>
  <div class="products">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>
  .products{
    max-width: 900px;
    padding: 25px;
    background-color: white;
  }
</style>
