<template>
  <div>
    <NavBar />
    <div class="content">
      <h1>找回密码</h1>

      <div class="form">
        <div class="input-group-item">
          <p class="label">账号</p>
          <div class="input-wrapper">
            <input type="text" placeholder="请输入账号">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
</script>

<style lang="scss" scoped>
.content {
  @include mobile-padding();
  h1 {
    font-size: 25px;
    font-weight: 600;
    color: #000;
    margin-top: 40px;
  }
}
</style>
