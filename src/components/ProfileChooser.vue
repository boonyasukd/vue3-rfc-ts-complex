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

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { useStore } from '../composites/base/store';
import { useRouter } from '../composites/base/router';

export default createComponent({
  setup() {
    const { login } = useStore();
    const { push } = useRouter();

    return {
      loginAndRedirect(name: string) {
        login(name);
        push({ name: 'formChooser' });
      },
    };
  },
});
</script>
