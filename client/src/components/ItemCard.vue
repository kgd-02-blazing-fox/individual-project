<template>
  <div class="col-lg-4 col-md-6 col-sm-6 mt-3">
        <div class="card" style="">
          <img :src="item.image_url" class="card-img-top" alt="images">
          <div class="card-body">
            <h5 id="bigger" class="card-title">{{item.name}}</h5>
            <div id="smaller">
              <div class="col">
                <div class="row">
                  <div class="col-5">
                  <b>PRICE</b>
                  </div>
                  <div class="col">
                  {{priceInRupiah}}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-5">
                  <b>STOCK</b>
                  </div>
                  <div class="col">
                  {{item.stock}}
                  </div>
                </div>
              </div>
            </div>
            <div class="m-1">
              <a @click.prevent="add" href="#" class="btn btn-dark"><i class="fas fa-cart-plus"></i> add to cart!</a>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'ItemCard',
  props: ['item'],
  methods: {
    add () {
      const payload = {
        id: this.item.id,
        name: this.item.name,
        price: this.item.price,
        stock: this.item.stock
      }
      this.socket.emit('itemChanged', payload)
      // this.$store.dispatch('addToChart', payload)
    }
  },
  computed: {
    priceInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.item.price)
    }
  },
  mounted () {
    this.socket = io.connect('http://localhost:3000')
  }
}
</script>

<style scoped>
#bigger{
  text-transform: uppercase;
}
#smaller{
  font-size: 15px;
}

</style>
