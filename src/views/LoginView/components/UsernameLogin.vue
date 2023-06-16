<template>
  <form class="form" @submit="submit">
    <div class="input-wrapper">
      <input type="text" placeholder="请输入账号 " name="username" />
      <IconClear class="icon-clear" />
    </div>

    <div class="input-wrapper">
      <input autocomplete type="password" placeholder="请输入账号 " name="password" />
      <IconClear class="icon-clear" />
    </div>
    <VButton>登录</VButton>
  </form>
</template>

<script setup>
import IconClear from '@/components/icons/IconClear'
const submit = (event) => {
  event.preventDefault()
  console.log(456)
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  margin-bottom: 30px;
  input {
    width: 100%;
    border: none;
    font-size: 16px;
    color: #111;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .icon-clear {
    position: absolute;
    right: 3px;
    top: 5px;
  }
}
</style>
