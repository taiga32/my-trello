import { createRouter, createWebHashHistory } from 'vue-router'
import BoardItem from '../components/BoardItem.vue'

const routes = [
  {
    path: '/',
    name: 'board',
    component: BoardItem
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
