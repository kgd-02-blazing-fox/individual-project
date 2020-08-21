<template lang="html">
  <div class="header">
    <img :src="ImageUrl" alt="Mr.Arnold" class="rounded-circle my-4" style="height: 10em;">
    <h2 class="font-weight-bold">Mr.Arnold Money</h2>
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

<style scoped>
.header {
  background-color: #ffffff;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
}

</style>
