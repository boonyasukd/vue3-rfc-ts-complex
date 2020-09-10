<template>
  <div class="form-group">
    <label :for="fieldName">{{ label }}</label>
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

<script lang="ts" setup="props">
import { useFormFieldManager } from '@/composites/form_management';

declare const props: { fieldName: string };

export const { value, label, error } = useFormFieldManager(props.fieldName);
</script>
