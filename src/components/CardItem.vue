<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">
      ☓
    </button>
    <div class="body">
      {{ body }}
    </div>
  </div>
</template>

<script setup>
import store from '@/store';
import { defineProps } from 'vue';

const props = defineProps({
  body: {
    type: String,
    required: true
  },
  listIndex: {
    type: Number,
    required: true
  },
  cardIndex: {
    type: Number,
    required: true  
  }
})

const removeCardFromList = () => {
    if (confirm('本当にこのカードを削除しますか？')) {
      store.dispatch('removeCardFromList', { cardIndex: props.cardIndex, listIndex: props.listIndex})
  }
}
</script>