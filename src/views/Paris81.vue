<template>
  <main>
    <h2>Paris 1981</h2>
    <final-info result="Liverpool 1-0 Real Madrid" scorers="Alan Kennedy, 62'" date="27th May 1981" stadium="Parc des Princes, Paris" attendance="48360" />
      <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Ray Clemence"
      rightback="Phil Neal" 
      centreback="Phil Thompson (c)"
      centreback2="Alan Hansen"
      leftback="Alan Kennedy" 
      midfield1="Sammy Lee"
      midfield2="Graeme Souness"
      midfield3="Terry McDermott"
      forward1="Ray Kennedy"
      forward2="Kenny Dalglish"
      forward3="David Johnson"
      team1subs="Jimmy Case, Steve Ogrizovic, Colin Irwin, Richard Money, Howard Gayle"
      manager1="Bob Paisley"
      />
      
      <starting-lineup 
      team2="Real Madrid"
      goalkeeper="Agustin"
      rightback="Rafael García Cortés"
      centreback="José Antonio Camacho"
      centreback2="Uli Stielike"
      leftback="Andrés Sabido"
      midfield1="Spain Vicente del Bosque"
      midfield2="Juanito"
      midfield3="Ángel"
      forward1="Santillana (c)"
      forward2="Antonio García Navajas"
      forward3="Laurie Cunningham"
      team2subs="Miguel Ángel, Isidoro San José, Isidro, Francisco García Hernández, Francisco Pineda"
      manager2="Vujadin Boškov"
      />
    </div>
  </main>
</template>

<script>
import FinalInfo from '../components/FinalInfo.vue'
import StartingLineup from '../components/Lineup.vue'

export default {
  components: {
    StartingLineup,
    FinalInfo
  }
}
</script>

<style lang="scss" scoped>

</style>