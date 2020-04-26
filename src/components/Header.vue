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

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from '@/composites/base/i18n';
import store from '@/store';

export default defineComponent({
  setup() {
    const { msg } = useI18n();
    const { state, getters } = store;

    return { msg, state, getters };
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
