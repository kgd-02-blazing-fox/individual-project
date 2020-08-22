<template>
  <div class="dompet">
    <h3>{{ money }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    money () {
      return this.$store.state.money
    }
  }
}
</script>

<style>
  .dompet{
    background-color: green;
    color: white;
    padding: 25px;
    max-width: 900px;
  }
</style>
