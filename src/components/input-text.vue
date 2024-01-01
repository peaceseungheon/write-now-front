<script setup>
import { Field, ErrorMessage } from 'vee-validate'
defineProps({
  label: String,
  modelValue: String,
  name: String,
  type: {
    type: String,
    default: 'text'
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label class="text-left">{{ label }}</label>
    <Field class="border rounded-md p-2" :name="name" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <ErrorMessage class="text-left text-red-500 text-sm" :name="name" />
  </div>
</template>
