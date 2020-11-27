<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { useI18n } from '@/compositions/base/i18n';

const props = defineProps({
  valid: { type: Object as PropType<boolean>, required: true },
  save: { type: Object as PropType<() => void>, required: true },
  reset: { type: Object as PropType<() => void>, required: true },
});
const { msg } = useI18n();
</script>
