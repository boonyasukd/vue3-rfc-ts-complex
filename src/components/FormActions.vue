<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts">
import { Wrapper, createComponent } from 'vue-function-api';
import { useI18n } from '../composites/base/i18n';

interface Props { valid: Wrapper<boolean>, save: () => void, reset: () => void }

export default createComponent({
  props: ['valid', 'save', 'reset'] as unknown as Props,
  setup({ valid, save, reset }) {
    const { msg } = useI18n();
    return { valid, save, reset, msg };
  },
});
</script>
