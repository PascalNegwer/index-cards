<template>
  <div class="card">
    <p>{{ card.question }}</p>
    <p>{{ card.answer }}</p>
    <button @click="$emit('delete', card.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
