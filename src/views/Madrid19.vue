<template>
  <main>
    <h2>Madrid 2019</h2>
    <final-info result="Liverpool 2-0 Tottenham Hotspur" scorers="Mohammad Salah 2', Divock Origi 88'" date="1st June 2019" stadium="Metropolitano Stadium" attendance="63272" MoM="Virgil van Dijk" />
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
      team1subs="Simon Mignolet, Caoimhín Kelleher, Dejan Lovren, Joe Gomez, Alberto Moreno, James Milner, Adam Lallana, Alex Oxlade-Chamberlain, Xherdan Shaqiri, Daniel Sturridge, Rhian Brewster Divock Origi"
      manager1="Jurgen Klopp"
      />
      
      <starting-lineup 
      team2="Tottenham Hotspur"
      goalkeeper="Hugo Lloris"
      rightback="Kieran Trippier"
      centreback="Toby Alderweireld"
      centreback2="Jan Vertonghen"
      leftback="Danny Rose"
      midfield1="Moussa Sissoko"
      midfield2="Harry Winks"
      midfield3="Dele Alli"
      forward1="Christian Eriksen"
      forward2="Son Heung-min"
      forward3="Harry Kane"
      team2subs="Michel Vorm, Paulo Gazzaniga, Davinson Sánchez, Kyle Walker-Peters, Juan Foyth, Serge Aurier, Ben Davies, Erik Lamela, Victor Wanyama, Eric Dier, Lucas Moura, Fernando Llorente"
      manager2="Mauricio Ponchettino"
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