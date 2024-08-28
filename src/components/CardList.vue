<template>
  <div>
    <Card v-for="card in cards" :key="card.id" :card="card" @delete="deleteCard" />
  </div>
</template>

<script>
import Card from './Card.vue';
import { getCards, deleteCard } from '../utils/indexedDB';

export default {
  components: { Card },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    async created() {
      this.cards = await getCards();
    },
    async deleteCard(id) {
      await deleteCard(id);
      this.cards = await getCards();
    },
  },
};
</script>
