<template>
  <component :is="currentRoute.component" />
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { useRouter } from '../composites/base/router';

export default createComponent({
  setup() {
    const { currentRoute } = useRouter();
    return { currentRoute };
  },
});
</script>
