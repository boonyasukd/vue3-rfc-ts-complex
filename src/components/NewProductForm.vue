<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ msg('newProduct') }}</div>
    <div class="card-body">
      <form :id="formName" @submit.prevent>
        <FormItem fieldName="name"/>
        <FormItem fieldName="description"/>
        <FormItem fieldName="productCode"/>
        <FormItem fieldName="price"/>

        <FormActions :save="save" :reset="reset" :valid="valid"/>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composites/base/i18n';
import { useFormManager } from '@/composites/form_management';
import { NewProductForm } from '@/models';

export { default as FormItem } from './FormItem.vue';
export { default as FormActions } from './FormActions.vue';
export const { formName, valid, save, reset } = useFormManager(NewProductForm);
export const { msg } = useI18n();
</script>
