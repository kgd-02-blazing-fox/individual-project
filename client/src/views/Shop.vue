<template>
  <div>
    <Header/>
    <Amount/>
    <div class="container mt-2">
        <div class="row">
            <Item
                v-for="(item,i) in ItemList"
                :key="i"
                :index="i"
                :name="item.name"
                :image_url="item.image_url"
                :price="item.price"
                :stock="item.stock"
                :status="item.status"
                @itemChanges="itemChangesShop"
            />
        </div>
    </div>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
import Header from '../components/Header.vue'
import Amount from '../components/Amount.vue'
import io from 'socket.io-client'

export default {
  name: 'Shop',
  methods: {
    itemChangesShop (obj) {
      this.socket.emit('item-changes', obj)
    }
  },
  computed: {
    ItemList () {
      return this.$store.state.ItemList
    }
  },
  created () {
    this.$store.commit('resetImage')
  },
  mounted () {
    this.socket = io.connect('http://localhost:3000')
    this.socket.emit('reset')
    this.socket.on('init', (seed) => {
      this.$store.commit('seedItem', seed)
    })
    this.socket.on('changes', (obj) => {
      this.$store.commit('changeItem', obj)
    })
  },
  components: {
    Item,
    Header,
    Amount
  }
}
</script>

<style>

</style>
