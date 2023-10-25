<template>
  <form :class="classes" @submit.prevent="addCardToList">
    <input v-model="body"
      type="text"
      class="text-input"
      placeholder="Add new card"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>

<script setup>
import store from '@/store';
import { defineProps, ref, computed } from 'vue';

const body = ref('')
let isEditing = ref(false)

const props = defineProps({
    listIndex: {
      type: Number,
      required: true
  }
})

const startEditing = () => {
  isEditing.value = true
}
const finishEditing = () => {
  isEditing.value = false
} 

const addCardToList = () => {
  store.dispatch('addCardToList', { body: body.value, listIndex: props.listIndex })
  body.value = ''  
}
// computedを使うことで、isEditing.valueに変化が起きたときにclassesが呼び出される
const classes = computed(() => {
  const classList = ['addcard']
  if (isEditing.value) {
    classList.push('active')
  }
  if (bodyExists.value) {
    classList.push('addable')
  }
  return classList
})

const bodyExists = computed(() => {
  return body.value.length > 0
})
</script>