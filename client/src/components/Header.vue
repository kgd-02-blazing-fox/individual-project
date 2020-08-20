<template>
  <div class="container mt-5">
        <div class="row">
            <div class="col-12 text-center border">
                <h1 class="mt-4">Spend Mr.Arnold's Money!</h1>
                <img :src="ImageUrl" alt="Mr.Arnold" class="rounded-circle my-4" style="height: 10em;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    ImageUrl () {
      return this.$store.state.ImageUrl
    }
  }
}
</script>

<style>

</style>
