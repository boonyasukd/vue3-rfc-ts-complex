<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ msg('chooseForm') }}</div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block"
            @click="chooseForm('newCustomer')"
          >{{ msg('newCustomer') }}</button>
        </div>
        <div class="col-sm">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block"
            @click="chooseForm('newProduct')"
          >{{ msg('newProduct') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useI18n } from '@/compositions/base/i18n';

const { push } = useRouter();
const { msg } = useI18n();
const chooseForm = (name: string) => { push({ name }); };
</script>
