<template>
  <div class="form-group">
    <label :for="fieldName">{{ myLabel }}</label>
    <input
      :id="fieldName"
      class="form-control"
      :class="{ 'is-invalid': error }"
      type="text"
      v-model="value"
    >
    <span class="invalid-feedback">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useFormFieldManager } from '@/compositions/form_management';

const props = defineProps<{ fieldName: string }>();
const { value, label: myLabel, error } = useFormFieldManager(props.fieldName);
</script>
