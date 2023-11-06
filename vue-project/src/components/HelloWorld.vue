<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div class="regex justify-content-center" :class="convertOff">
      <input class="form-control mb-2" type="text" placeholder="Default input" aria-label="default input example" v-model="slugText">
      <p class="mx-2">Try Convert Regex With binding computed</p>
      <input class="form-control bg-light mb-2" type="text" placeholder="Result input" aria-label="default input example" v-model="changeText">
    </div>
  
  </div>
</template>


<style scoped>
  .regex input {
    height: 2em;
    width: 20em;
  }

</style>