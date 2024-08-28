<template>
  <form @submit.prevent="addNewCard">
    <input v-model="question" placeholder="Question" required />
    <input v-model="answer" placeholder="Answer" required />
    <button type="submit">Add Card</button>
  </form>
</template>

<script>
import { addCard, getCards } from '../utils/indexedDB';

export default {
  data() {
    return {
      question: '',
      answer: '',
    };
  },
  methods: {
    async addNewCard() {
      await addCard({ question: this.question, answer: this.answer });
      this.$emit('card-added');
      this.question = '';
      this.answer = '';
    },
  },
};
</script>
