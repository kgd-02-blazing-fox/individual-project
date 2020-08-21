<template>
  <div class="col-4 mt-3">
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
            <div class="mt-1">
              <a href="#" class="btn btn-dark"><i class="fas fa-cart-plus"></i> add to cart!</a>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item'],
  computed: {
    priceInRupiah () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.item.price)
    }
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
