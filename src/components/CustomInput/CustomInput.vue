<template>
  <div class="input-wrapper" :class="{ error: errorMessage }">
    <input
      :value="modelValue"
      @input="input"
      @blur="verify"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :type="type"
      :class="{ phone: isPhone }"
      autocomplete
      name="username"
    />
    <p v-if="hasErrorTip" class="error-tip">{{ errorMessage }}</p>

    <div class="icon-wrapper">
      <IconClear v-if="modelValue && clearable" @click="clear" class="icon" />
      <span v-if="modelValue && isPwd" @click="toggle">
        <IconEyeClose v-show="type === 'password'" class="icon" />
        <IconEyeOpen v-show="type === 'text'" class="icon" />
      </span>
    </div>
  </div>
</template>

<script setup>
import IconClear from '@/components/icons/IconClear'
import IconEyeClose from '@/components/icons/IconEyeClose'
import IconEyeOpen from '@/components/icons/IconEyeOpen'
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
  // 重置表单验证状态
  errorMessage.value = ''
}
const verify = (e) => {
  if (!e.target.value) {
    errorMessage.value = props.placeholder
  } else if (!props.rule.reg.test(e.target.value)) {
    errorMessage.value = props.rule.errorMessage
  }
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
.input-wrapper {
  position: relative;
  input {
    width: 100%;
    border: none;
    font-size: 16px;
    color: #111;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    padding-right: 30px;
    &.phone {
      text-indent: 90px;
    }
  }
  .icon-wrapper {
    position: absolute;
    right: 3px;
    top: 5px;
    .icon {
      margin-left: 10px;
    }
  }
  &.error {
    input {
      border-bottom-color: var(--color-danger);
    }
  }
  .error-tip {
    color: var(--color-danger);
    font-size: 12px;
    margin-top: 4px;
    height: 20px;
  }
}
</style>
