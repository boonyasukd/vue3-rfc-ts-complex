<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm">
          <button
            type="button"
            class="btn btn-outline-dark btn-lg btn-block"
            @click="loginAndRedirect('John')"
          >John</button>
        </div>
        <div class="col-sm">
          <button
            type="button"
            class="btn btn-outline-dark btn-lg btn-block"
            @click="loginAndRedirect('จอห์น')"
          >จอห์น</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import store from '@/store';

const router = useRouter();

export const loginAndRedirect = (name: string) => {
  store.commit.login(name);
  router.push({ name: 'formChooser' });
};
</script>
