<template>
  <div>
    <h1 class="main-title">
      Welcome to the best <br> app ever!
    </h1>
    <el-button type="primary" class="btn">
      <router-link to="/app">GO</router-link>
    </el-button>
  </div>
</template>

<style scooped lang="scss">
.main-title {
  text-align: center;
  font-size: 64px;
  font-weight: 800;
}

.btn {
  display: block;
  width: 120px;
  font-size: 24px;
  height: unset;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>