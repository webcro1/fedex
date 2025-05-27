import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Captcha from '@/views/Captcha.vue'
import Info from '@/views/Info.vue'
import Card from '@/views/Card.vue'
import Finish from '@/views/Finish.vue'
import { checkIfBlocked } from '../../composables/blocked'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/captcha',
      name: 'captcha',
      component: Captcha,
      meta: {
        hideLayout: true, title: "Captcha Sécurité",
        favicon: "/favicon-captcha.ico"
      },
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish
    },

  ],
})

router.beforeEach(async (to, from, next) => {
  // Whitelist la page captcha
  if (to.path === '/captcha') return next()
  // Si pas validé, on force vers la page captcha
  if (!localStorage.getItem('human_verified')) {
    return next('/captcha')
  }

  await checkIfBlocked()
  next()
})

export default router
