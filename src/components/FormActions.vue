<template>
  <div>
    <button type="button" class="btn btn-primary" :disabled="!valid" @click="save">{{ msg('save') }}</button>
    <span>&nbsp;</span>
    <button type="button" class="btn btn-primary" @click="reset">{{ msg('reset') }}</button>
  </div>
</template>

<script lang="ts">
import { createComponent, Ref, PropType } from '@vue/composition-api';
import { useI18n } from '../composites/base/i18n';

interface Props { valid: Ref<boolean>, save: () => void, reset: () => void }

export default createComponent({
  props: {
    valid: { type: null as unknown as PropType<Ref<boolean>>, required: true },
    save: { type: null as unknown as PropType<() => void>, required: true },
    reset: { type: null as unknown as PropType<() => void>, required: true },
  } as const,
  setup({ valid, save, reset }: Props) {
    const { msg } = useI18n();
    return { valid, save, reset, msg };
  },
});
</script>
