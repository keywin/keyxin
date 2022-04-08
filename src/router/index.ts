import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/notes',
    children: [
      {
        path: '/notes',
        name: 'notes',
        component: () => import('../views/notes/Index.vue'),
        meta: {
          title: '笔记'
        }
      },
      {
        path: '/methods',
        name: 'methods',
        component: () => import('../views/methods/Index.vue'),
        meta: {
          title: '方法整理'
        }
      },
      {
        path: '/playground',
        name: 'playground',
        component: () => import('../views/playground/Index.vue'),
        meta: {
          title: 'playground'
        }
      },
      {
        path: '/im',
        name: 'im',
        component: () => import('../views/im/Index.vue'),
        meta: {
          title: 'Im'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export { routes }

export default router
