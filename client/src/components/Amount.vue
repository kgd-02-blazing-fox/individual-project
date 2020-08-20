<template>
  <div class="container mt-2 sticky-top">
        <div class="row">
            <div class="col-12 text-center border bg-success">
                <h2 class="my-2 text-white">{{money}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Amount',
  computed: {
    money () {
      return this.$store.getters.toRpStore
    }
  }
}
</script>

<style>

</style>
