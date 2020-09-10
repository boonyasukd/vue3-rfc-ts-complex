<template>
  <div class="app-header">
    <img width="13%" src="../assets/logo.png">
    <h3>
      <code>composition api</code> demo
    </h3>
    <p v-if="!getters.isLoggedIn">{{ msg('chooseProfile') }}</p>
    <p v-else class="text-primary">{{ msg('welcome', { nickname: state.user.nickname }) }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composites/base/i18n';
import store from '@/store';

export const { msg } = useI18n();
export const { state, getters } = store;
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
