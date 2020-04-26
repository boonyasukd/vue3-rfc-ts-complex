<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from '@/composites/base/i18n';

export default defineComponent({
  props: ['valid', 'save', 'reset'],
  setup() {
    const { msg } = useI18n();
    return { msg };
  },
});
</script>
