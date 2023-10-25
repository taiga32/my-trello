import { createStore } from 'vuex'

const savedLists = localStorage.getItem('trello-lists')

// 更新後のデータをローカルストレージに保存するためにインスタンス化する
const store = createStore({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: ('Mathematics') }
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map( (content) => (count += content.cards.length))
      return count
    }
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    }
    },
  modules: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store


