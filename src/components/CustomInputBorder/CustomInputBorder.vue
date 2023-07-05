<template>
  <div class="input-group-item">
    <p class="label">{{ label }}</p>
    <div class="input-wrapper">
      <input
        @input="input"
        :value="modelValue"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{ phone: isPhone }"
      />
      <div class="icon-wrapper">
        <IconClear v-if="modelValue && clearable" @click="clear" class="icon-clear" />
        <span v-if="modelValue && isPwd" @click="toggle">
          <IconEyeClose v-show="type === 'password'" class="icon-eye-close" />
          <IconEyeOpen v-show="type === 'text'" class="icon-eye-open" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  clearable: {
    type: Boolean,
    default: false
  },
  rule: {
    type: Object,
    default: () => ({})
  },
  hasErrorTip: {
    type: Boolean,
    default: false
  },
  labelWidth: {
    type: Number,
    default: 0
  },
  indent: {
    type: [String, Number],
    default: ''
  },
  isPwd: {
    type: Boolean,
    default: false
  },
  isPhone: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

const errorMessage = ref('')
const type = ref('text')
const input = (e) => {
  emit('update:modelValue', e.target.value)
}
const clear = () => {
  emit('update:modelValue', '')
  // 重置表单验证状态
  errorMessage.value = ''
}

const toggle = () => {
  if (type.value === 'password') {
    type.value = 'text'
  } else {
    type.value = 'password'
  }
}
if (props.isPwd) {
  type.value = 'password'
}
</script>

<style lang="scss" scoped>
.input-group-item {
  margin-bottom: 20px;
  .label {
    font-size: 15px;
    color: #000;
    margin-bottom: 10px;
  }

  .input-wrapper {
    position: relative;
    input {
      border-radius: 6px;
      border: 1px solid #f2f5f9;
      background: rgba(217, 217, 217, 0);
      line-height: 50px;
      font-size: 15px;
      text-indent: 1em;
      width: 100%;
      &[disabled] {
        background: #f7f7f7;
      }
      &.phone {
        text-indent: calc(90px + 1em);
      }
    }
    .icon-wrapper {
      position: absolute;
      right: 1em;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      svg {
        margin-left: 8px;
      }
      .icon-clear {
        fill: #999;
      }
      .icon-eye-close,
      .icon-eye-open {
        fill: #bbb;
      }
    }
  }
}
</style>
