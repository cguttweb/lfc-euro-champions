<template>
  <main>
    <h2>Wembley 1978</h2>
      <final-info result="Liverpool 1-0 Club Brugge" scorers="Dalglish 64'" date="10th May 1984" stadium="Wembley stadium" attendance="92500" />
      <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Ray Clemence"
      rightback="Phil Neal" 
      centreback="Phil Thompson"
      centreback2="Alan Hansen"
      leftback="Emlyn Hughes (c)" 
      midfield1="Jimmy Case"
      midfield2="Terry McDermott"
      midfield3="Graeme Souness"
      forward1="Ray Kennedy"
      forward2="Kenny Dalglish"
      forward3="David Fairclough"
      team1subs="Steve Heighway, Steve Ogrizovic, Joey Jones, Colin Irwin, Ian Callaghan" 
      />
      
      <starting-lineup 
      team2="Club Brugge"
      goalkeeper="Birger Jensen"
      rightback="Fons Bastijns (c)"
      centreback="Georges Leekens"
      centreback2="Eduard Krieger"
      leftback="Gino Maes"
      midfield1="Julien Cools"
      midfield2="René Vandereycken"
      midfield3="Lajos Kű"
      forward1="Danny De Cubber"
      forward2="Jan Simoen"
      forward3="Jan Sørensen"
      team2subs="Leen Barth, Dirk Sanders, Jos Volders, Raoul Lambert, Bernard Verheecke"
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