<template>
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 border p-4 text-center">
    <img
      :src="image_url"
      class="my-2"
      style="height: 8em;"
    />
    <h4>{{name}}</h4>
    <h5 class="text-success mt-0">{{toRp}}</h5>
    <h5 class="text-secondary border mx-5">{{stock}}</h5>
    <button class="btn btn-success w-50" @click.prevent="buy({index,name,price,stock})" :disabled="status">Buy!</button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['index', 'name', 'image_url', 'price', 'stock', 'status'],
  methods: {
    buy (obj) {
      this.$store.commit('buyItem', obj)
      this.$emit('itemChanges', obj)
    }
  },
  computed: {
    toRp () {
      const value = this.price
      if (value === '') return 'Rp. 0,00'
      let count = String(value).length % 3
      if (count === 0) count = 3
      let cont = 'Rp. '
      for (let i = 0; i < String(value).length; i++) {
        cont += String(value)[i]
        count--
        if (count === 0) {
          i === String(value).length - 1 ? cont += '.' : cont += ','
          count = 3
        }
      }
      return cont + '00'
    }
  }
}
</script>

<style>
</style>
