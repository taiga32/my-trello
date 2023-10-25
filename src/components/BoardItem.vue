<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <draggable :list="lists" @end="movingList">
          <template #item="{ element, index }">
            <ListItem
              :key="element.id"
              :title="element.title"
              :cards="element.cards"
              :listIndex="index"
              @change="movingCard"
            />
          </template>
        </draggable>
        <ListAdd/> 
      </div>
    </main>
  </div>
  
</template>

<script setup>
import ListAdd from './ListAdd.vue'
import ListItem from './ListItem.vue'
import store from '@/store'
import { computed } from 'vue'
import draggable from 'vuedraggable'

const lists = store.state.lists

const totalCardCount = computed(() => {
  return store.getters.totalCardCount
})

const movingCard = () => {
  store.dispatch('updateList', { lists: lists})
}

const movingList = () => {
  store.dispatch('updateList', { lists: lists})
}
</script>