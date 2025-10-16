import FormPage from '@/pages/FormPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ResultPage from '@/pages/ResultPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/form',
    component: FormPage,
    name: 'form',
  },
  {
    path: '/result',
    component: ResultPage,
    name: 'result',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
