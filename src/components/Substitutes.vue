<template>
  <div>
    <h3>Substitutes:</h3>
    <div>{{ subs }}</div>
  </div>
</template>

<script>
export default {
  props: {
    subs: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>