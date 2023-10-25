<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-couter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <template #item="{ element, index }">
        <CardItem
          :body="element.body"
          :key="element.key"
          :cardIndex="index"
          :listIndex="listIndex"
        />
      </template>
    </draggable>
<CardAdd :listIndex="listIndex"/>
    
  </div>
</template>

<script setup>
import store from '@/store'
import { defineProps, computed } from 'vue'
import CardAdd from './CardAdd'
import CardItem from './CardItem'
import draggable from 'vuedraggable'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
        type: Number,
        required: true
    }
})

const totalCardInList = computed(() => {
  return props.cards.length
})

const removeList = () => {
    if (confirm('本当にこのリストを削除しますか？')) {
      store.dispatch('removelist', { listIndex: props.listIndex })
  }
}
</script>