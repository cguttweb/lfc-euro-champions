<template>
  <main>
    <h2>Istanbul 2005</h2>
      <final-info result="Liverpool 3-3 AC Milan" scorers="Maldini 1', Crespo 39', 44',	Gerrard 54', Šmicer 56', Alonso 60'" date="25th May 2005" stadium="Atatürk Olympic Stadium" attendance="69000" MoM="Steven Gerrard" />
    <div class="lineups">
      <starting-lineup 
      team1="Liverpool" 
      goalkeeper="Jerzy Dudek"
      rightback="Steve Finnan" 
      centreback="Jamie Carragher"
      centreback2="Sami Hyypia"
      leftback="Djimi Traore" 
      midfield1="Steven Gerrard"
      midfield2="Xabi Alonso"
      midfield3="John Arne Riise"
      forward1="Luis Garcia"
      forward2="Harry Kewell"
      forward3="Milan Baros"
      team1subs="Scott Carson, Josemi, Dietmar Hamann, Antonio Núñez, Igor Bišćan, Djibril Cissé, Vladimír Šmicer"
      manager1="Rafa Benitez" />
      
      <starting-lineup 
      team2="AC Milan"
      goalkeeper="Dida"
      rightback="Cafu"
      centreback="Jaap Stam"
      centreback2="Aleesandro Nesta"
      leftback="Paolo Maldini"
      midfield1="Gennaro Gattuso"
      midfield2="Andrea Pirlo"
      midfield3="Clarence Seedorf"
      forward1="Kaka"
      forward2="Andriy Shevchenko"
      forward3="Hernan Crespo"
      team2subs="Christian Abbiati, Kakha Kaladze, Alessandro Costacurta,	Rui Costa, Vikash Dhorasoo,	Brazil Serginho, Jon Dahl Tomasson"
      manager2="Carlo Ancelotti"
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
  },
}
</script>

<style scoped>

</style>