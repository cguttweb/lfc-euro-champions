<template>
  <div>
    <h2>Madrid 2019</h2>
    <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Alisson Becker"
      rightback="Trent Alexander Arnold" 
      centreback="Virgil van Djik"
      centreback2="Joel Matip"
      leftback="Andrew Robertson" 
      midfield1="Jordan Henderson"
      midfield2="Gini Wijnaldum"
      midfield3="Fabinho"
      forward1="Mohammad Salah"
      forward2="Sadio Mane"
      forward3="Robert Firmino" 
      />
      
      <starting-lineup 
      team2="Tottenham Hotspur"
      goalkeeper="Hugo Lloris"
      rightback="Kieran Trippier"
      centreback="Toby Alderweireld"
      centreback2="Jan Vertonghen"
      leftback="Danny Rose"
      midfield1="Sissoko"
      midfield2="Harry Winks"
      midfield3="Dele Alli"
      forward1="Christian Eriksen"
      forward2="Son Heung-min"
      forward3="Harry Kane" 
      />
    </div>
  </div>
</template>

<script>
import StartingLineup from '../components/StartingLineup.vue'

export default {
  components: { 
    StartingLineup 
  }
}
</script>

<style scoped>

</style>