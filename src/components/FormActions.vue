<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts">
import { createComponent, Ref } from '@vue/composition-api';
import { useI18n } from '../composites/base/i18n';

interface Props { valid: Ref<boolean>, save: () => void, reset: () => void }

export default createComponent<Props>({
  props: { valid: {}, save: {}, reset: {} }, // needed for vue 2.x
  setup() {
    const { msg } = useI18n();
    return { msg };
  },
});
</script>
