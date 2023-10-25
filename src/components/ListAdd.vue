<template>
  <form :class="classes" @submit.prevent="addList">
    <input v-model="title"
      type="text"
      class="text-input"
      placeholder="Add new list"
      @focusin="startEditing"
      @focusout="finishEditing"
    >
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script setup>
import store from '@/store'
import { computed, ref } from 'vue'

const title = ref('')
let isEditing = ref('')

const addList = () => {
  store.dispatch('addlist', { title: title.value })
  title.value = ''
}

const startEditing = () => {
  isEditing.value = true
}
const finishEditing = () => {
  isEditing.value = false
}

const classes = computed(() => {
  const classList = ['addlist']
  if (isEditing.value) {
    classList.push('active')
  }
  if (titleExists.value) {
    classList.push('addable')
  }
  return classList
})

const titleExists = computed(() => {
  return title.value.length > 0
}) 
</script>