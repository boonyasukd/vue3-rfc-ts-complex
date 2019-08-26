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

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { useFormFieldManager } from '../composites/form_management';

interface Props { fieldName: string }

export default createComponent<Props>({
  props: { fieldName: {} }, // needed for vue 2.x
  setup({ fieldName }: Props) {
    const { value, label, error } = useFormFieldManager(fieldName);
    return { fieldName, value, label, error };
  },
});
</script>
