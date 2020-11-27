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
import { useI18n } from '@/compositions/base/i18n';
import { useFormManager } from '@/compositions/form_management';
import { NewProductForm } from '@/models';
import FormItem from './FormItem.vue';
import FormActions from './FormActions.vue';

const { formName, valid, save, reset } = useFormManager(NewProductForm);
const { msg } = useI18n();
</script>
