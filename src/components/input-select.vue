<script setup>
import { Field, ErrorMessage } from 'vee-validate'
defineProps({
  label: String,
  modelValue: String,
  name: String,
  options: {
    type: Array,
    default: [
      {
        text: 'Y',
        value: 'Y'
      },
      {
        text: 'N',
        value: 'N'
      }
    ]
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label class="text-left">{{ label }}</label>
    
    <Field class="border rounded-md p-2" as="select" v-slot="{ value }" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <option value="" disabled>Select</option>
      <option v-for="item in options" :key="item.text" :value="item.value" :selected="value && value.includes(item.value)">{{ item.text }}</option>
    </Field>
    <ErrorMessage class="text-left text-red-500 text-sm" :name="name" />
  </div>
</template>
