<template>
  <main>
    <h2>Rome 1977</h2>
    <final-info result="Liverpool 3-1 Borussia Mönchengladbach" scorers="McDermott 28', Smith 64', Neal 82'(p), Simonsen 52'" date="25 May 1977" stadium="Stadio Olimpico" attendance="52078" />
      <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Ray Clemence"
      rightback="Phil Neal" 
      centreback="Emlyn Hughes(c)"
      centreback2="Tommy Smith"
      leftback="Joey Jones" 
      midfield1="Ray Kennedy"
      midfield2="Jimmy Case"
      midfield3="Ian Callaghan"
      forward1="Terry McDermott"
      forward2="Steve Heighway"
      forward3="Kevin Keegan"
      team1subs="Peter McDonnell, David Fairclough, David Johnson, Alan Waddle, Alec Lindsay" 
      />
      
      <starting-lineup 
      team2="Borussia Mönchengladbach"
      goalkeeper="Wolfgang Kneib"
      rightback="Hans Klinkhammer"
      centreback="Berti Vogts (c)"
      centreback2="Hans-Jürgen Wittkamp"
      leftback="Frank Schäffer"
      midfield1="Rainer Bonhof"
      midfield2="Herbert Wimmer"
      midfield3="Uli Stielike"
      forward1="Horst Wohlers"
      forward2="Allan Simonsen"
      forward3="Jupp Heynckes"
      team2subs="Wolfgang Kleff, Wilfried Hannes, Christian Kulik, Karl Del'Haye, Herbert Heidenreich"
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

<style scoped>

</style>