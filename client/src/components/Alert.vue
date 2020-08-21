<template>
  <div id="alertpos" class="">
    <div class="alert alert-primary" role="alert">
    <b><i class="fas fa-exclamation-circle fa-2x"></i> {{message}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
    }
  },
  props: ['message']
}
</script>

<style scoped>
#alertpos{
  z-index: 1;
  position: absolute;
  width: 100%;
}

</style>
