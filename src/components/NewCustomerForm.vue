<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ msg('newCustomer') }}</div>
    <div class="card-body">
      <form :id="formName" @submit.prevent>
        <FormItem fieldName="firstName"/>
        <FormItem fieldName="lastName"/>
        <FormItem fieldName="address"/>
        <FormItem fieldName="phoneNum"/>
        <FormItem fieldName="email"/>

        <FormActions :save="save" :reset="reset" :valid="valid"/>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/compositions/base/i18n';
import { useFormManager } from '@/compositions/form_management';
import { NewCustomerForm } from '@/models';
import FormItem from './FormItem.vue';
import FormActions from './FormActions.vue';

const { formName, valid, save, reset } = useFormManager(NewCustomerForm);
const { msg } = useI18n();
</script>
