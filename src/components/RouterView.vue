<template>
  <component :is="currentRoute.component" />
</template>

<script lang="ts">
import { createComponent } from 'vue-function-api';
import { useRouter } from '../composites/base/router';

export default createComponent({
  setup() {
    const { currentRoute } = useRouter();
    return { currentRoute };
  },
});
</script>
