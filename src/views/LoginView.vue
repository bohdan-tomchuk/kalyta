<template>
  <div class="form">
    <h2>Login</h2>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormDirector from '@/components/Form/FormDirector'
import FormBuilder from '@/components/Form/FormBuilder'

export default defineComponent({
  components: {
    LoginForm: new FormDirector(new FormBuilder()).makeLoginForm()
  },
  setup() {

  }
})
</script>

<style lang="scss" scooped>
.form {
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #333333;
}

h2 {
  margin-top: unset;
  color: #fff;
}
</style>