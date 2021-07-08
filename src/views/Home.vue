<template>
  <main>
    <h1>Liverpool FC Euro Champions</h1>
    <p>The competition originally began in 1955 as the Coupe des Clubs Champions Européens (French for European Champion Clubs' Cup), but was rebranded the Champions League in 1992</p>

      <img src="../assets/european-cup.jpg" alt="European Cup Trophy">

      <img class="lfc-img" src="../assets/liverbird.jpeg" alt="">
      <img class="lfc-img" src="../assets/lfc-crest.jpeg" alt="">

  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
img[src*=cup] {
  float: left;
  max-width: 600px;
}

.lfc-img {
  max-width: 300px;
}
</style>
