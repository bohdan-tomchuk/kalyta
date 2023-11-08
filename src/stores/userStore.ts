import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'
import router from '@/router/index'
import { ElNotification } from 'element-plus'
import type { LoginCredentials, User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User
  }),
  actions: {
    async login (data: LoginCredentials) {
      try {
        const { data: response, error } = await supabase.auth.signInWithPassword(data)
        if (error) throw error
        this.user = response.user
        router.push({ path: '/' })
      } catch (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error'
        })
      }
    },
    async logout () {
      supabase.auth.signOut()
      router.push({ path: '/login' })
    }
  }
})