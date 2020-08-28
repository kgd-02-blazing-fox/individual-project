<template>
  <div class="dompet">
    <h3>Rp. {{ money }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    money () {
      const numberString = this.$store.state.money.toString()
      const sisa = numberString.length % 3
      let rupiah = numberString.substr(0, sisa)
      const ribuan = numberString.substr(sisa).match(/\d{3}/g)
      if (ribuan) {
        const separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }
      return rupiah
    }
  }
}
</script>

<style>
  .dompet{
    background-color: green;
    color: white;
    padding: 25px;
    max-width: 1200px;
  }
</style>
