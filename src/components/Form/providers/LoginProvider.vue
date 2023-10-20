<script lang="ts">
import { defineComponent } from 'vue'
import { supabase } from '@/lib/supabase'

interface IAuthCredentials {
  email: string
  password: string
}

export default defineComponent({
  name: 'LoginProvider',
  provide() {
    return {
      submitMethod: async (data: IAuthCredentials): Promise<void> => {
        const { data: response, error } = await supabase.auth.signInWithPassword(data)
        if (error) {
          console.log(error)
        } else {
          console.log(response)
          this.$router.push({ path: '/' })
        }
      }
    }
  },
  render() {
    return this.$slots.default?.()
  }
})
</script>