<template>
  <div class="form">
    <h2>Login</h2>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="Password"></el-input>
      </el-form-item>
      <el-button type="default" @click="login">Login</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

async function login () {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.username,
    password: form.password
  })

  if (error) {
    console.error(error)
    return
  }

  if (data) {
    console.log(data)
    router.push('/')
  }
}
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