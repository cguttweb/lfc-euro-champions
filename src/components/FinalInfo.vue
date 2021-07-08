<template>
  <div class="final-info">
    <p class="result">{{ result }}</p>
    <p><strong>Scorers:</strong> {{ scorers }}</p>
    <p><strong>Date:</strong> {{ date }}</p> 
    <p><strong>Stadium:</strong> {{ stadium }}</p> 
    <p><strong>Attendance:</strong> {{ attendance }}</p>
    <p v-if="MoM"><strong>Man of the Match</strong>: {{ MoM }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      result: {
        type: String,
        required: true
      },
      date: {
        type: String
      },
      stadium: {
        type: String,
        required: true
      },
      attendance: {
        type: String,
        required: true
      },
      MoM: {
        type: String
      },
      scorers: {
        type: String
      }
    }
  }
</script>

<style scoped>
.final-info {
  background-color: #42b983;
  border: 1px solid #30815d;
  margin: auto;
  width: 55rem;
}

.result {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>