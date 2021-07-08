<template>
  <main>
    <h2>Rome 1984</h2>
    <final-info result="Liverpool 1-1 Roma (4-2 on penalties)" scorers="Neal 13', Pruzzo 42'" date="30th May 1984" stadium="Stadio Olimpico" attendance="69693" />
    <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Bruce Grobbelaar"
      rightback="Phil Neal" 
      centreback="Alan Hansen"
      centreback2="Mark Lawrenson"
      leftback="Alan Kennedy" 
      midfield1="Craig Johnston"
      midfield2="Sammy Lee"
      midfield3="Graeme Souness (c)"
      forward1="Ronnie Whelan"
      forward2="Kenny Dalglish"
      forward3="Ian Rush"
      team1subs="Michael Robinson, Bob Bolder, Steve Nicol, David Hodgson, Gary Gillespie" 
      />
      
      <starting-lineup 
      team2="Roma"
      goalkeeper="Franco Tancredi"
      rightback="Michele Nappi"
      centreback="Sebastiano Nela"
      centreback2="Ubaldo Righetti"
      leftback="Dario Bonetti"
      midfield1="Agostino Di Bartolomei (c)"
      midfield2="Toninho Cerezo"
      midfield3="Paulo Roberto Falcão"
      forward1="Bruno Conti"
      forward2="Roberto Pruzzo"
      forward3="Francesco Graziani"
      team2subs="Astutillo Malgioglio, Italy Emidio Oddi, Mark Tullio Strukelj, Odoacre Chierico, Francesco Vincenzi"
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

    FinalInfo
<style scoped>

</style>