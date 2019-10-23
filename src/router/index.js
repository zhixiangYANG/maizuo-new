import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: 'films',
        name: 'film',
        component: () => import('../views/home/films.vue')
      },
      {
        path: 'cinema',
        name: 'cinema',
        component: () => import('../views/home/cinema.vue')
      },
      {
        path: 'center',
        name: 'center',
        component: () => import('../views/home/center.vue')
      },
      {
        path: '',
        redirect: 'films'
      }
    ]
  },
  {
    path: '/news',
    name: 'new',
    component: () => import('../views/home/news.vue')
  }

]
const router = new VueRouter({
  routes
})

export default router
