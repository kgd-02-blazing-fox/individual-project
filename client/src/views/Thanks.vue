<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>THANK YOU PAK ARNOLD</h1>
          <h2>AND</h2>
        <h1>THANK YOU TO YOU</h1>
        <img src="../assets/thanks.jpg" alt="THANK YOU">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thanks',
  created () {
    this.$store.dispatch('reset')
    setTimeout((_) => {
      this.$router.push('/')
    }, 4000)
  }
}
</script>

<style>

</style>
