<template>
  <button :class="{disabled:disabled}" @click="emit('click')"><slot /></button>
</template>

<script setup>
const emit = defineEmits(['click'])
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
button {
  display: block;
  $height: 50px;
  height: $height;
  line-height: $height;
  width: 100%;
  border: none;
  border-radius: 6px;
  @include linear-gradient(90deg, #ff9000 16%, #ff5000 87.23%);
  color: #fff;
  font-size: 15px;
  &[disabled],&.disabled{
    background: rgba(187, 187, 187, 0.5);
  }
}
</style>
