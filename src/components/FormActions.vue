<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts" setup="props">
import { Ref } from 'vue';
import { useI18n } from '@/composites/base/i18n';

declare const props: {
  valid: Ref<boolean>;
  save: () => void;
  reset: () => void;
};

export const { msg } = useI18n();
</script>
