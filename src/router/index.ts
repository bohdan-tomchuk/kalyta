import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supabase } from '@/lib/supabase'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: MainLayout }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { layout: LoginLayout }
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../views/App/AppView.vue'),
      meta: { layout: MainLayout }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user && to.name === 'login') {
    next({ name: 'home' })
  } else if (!session?.user && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
