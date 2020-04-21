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
import { defineComponent } from 'vue';
import { useFormFieldManager } from '../composites/form_management';

export default defineComponent({
  props: ['fieldName'],
  setup(props) {
    const { value, label, error } = useFormFieldManager(props.fieldName);
    return { value, label, error };
  },
});
</script>
