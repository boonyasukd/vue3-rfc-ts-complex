<template>
  <component :is="currentRoute.component" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from '../composites/base/router';

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    return { currentRoute };
  },
});
</script>
