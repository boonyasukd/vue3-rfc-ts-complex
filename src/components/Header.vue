<template>
  <div class="app-header">
    <img width="13%" src="../assets/logo.png">
    <h3>
      <code>function-based api</code> demo
    </h3>
    <p v-if="!isLoggedIn">{{ msg('chooseProfile') }}</p>
    <p v-else class="text-primary">{{ msg('welcome', { nickname: user.nickname }) }}</p>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { useI18n } from '../composites/base/i18n';
import { useStore } from '../composites/base/store';

export default createComponent({
  setup() {
    const { msg } = useI18n();
    const { isLoggedIn, user } = useStore();

    return { msg, isLoggedIn, user };
  },
});
</script>

<style>
.app-header {
  text-align: center;
}
.app-header p {
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
