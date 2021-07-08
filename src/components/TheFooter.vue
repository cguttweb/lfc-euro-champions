<template>
  <footer>
    Built by <a href="https://github.com/cguttweb">Chloe</a> in 2021 with <a href="https://vuejs.org" rel="noopener"><img alt="Vue logo" src="../assets/logo.png" width="25" /></a>
  </footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
footer {
  background-color: rgb(7, 7, 63);
  color: rgb(255, 255, 255);
  padding: 0.75rem 0;
}

a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

a:hover {
  font-weight: bold;
  text-decoration: underline;
}

img {
  vertical-align: middle;
}
</style>
