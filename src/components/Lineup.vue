<template>
  <div>
    <h3 v-if="team1">{{ team1 }}</h3>
    <h3 v-else>{{ team2 }}</h3>
      <ul>
        <li v-if="team1"><strong>Manager: {{ manager1 }}</strong></li>
        <li v-else><strong>Manager: {{ manager2 }}</strong></li>
        <li>{{ goalkeeper }}</li>
        <li>{{ rightback }}</li>
        <li>{{ centreback }}</li>
        <li>{{ centreback2 }}</li>
        <li>{{ leftback }}</li>
        <li>{{ midfield1 }}</li>
        <li>{{ midfield2 }}</li>
        <li>{{ midfield3 }}</li>
        <li>{{ forward1 }}</li>
        <li>{{ forward2 }} </li>
        <li>{{ forward3 }}</li>
      </ul>

      <h4>Substitutes:</h4>
      <ul>
        <ol v-if="team1subs">{{ team1subs }}</ol>
        <ol v-else>{{ team2subs }}</ol>
      </ul>
  </div>
</template>



<script>
export default {
  props: {
    team1: {
      type: String
    },
    team2: {
      type: String
    },
    goalkeeper: {
      type: String,
      required: true
    },
    rightback: {
      type: String,
      required: true
    },
    centreback: {
      type: String,
      required: true
    },
    centreback2: {
      type: String,
      required: true
    },
    leftback: {
      type: String,
      required: true
    },
    midfield1: {
      type: String,
      required: true
    },
    midfield2: {
      type: String,
      required: true
    },
    midfield3: {
      type: String,
      required: true
    },
    forward1: {
      type: String,
      required: true
    },
    forward2: {
      type: String,
      required: true
    },
    forward3: {
      type: String,
      required: true
    },
    team1subs: {
      type: String
    },
    team2subs: {
      type: String
    },
    manager1: {
      type: String
    },
    manager2: {
      type: String
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style: none;
}
</style>