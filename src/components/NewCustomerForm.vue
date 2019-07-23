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

<script lang="ts">
import { createComponent } from 'vue-function-api';
import { useI18n } from '../composites/base/i18n';
import { useFormManager } from '../composites/form_management';
import { NewCustomerForm } from '../models';

import FormItem from './FormItem.vue';
import FormActions from './FormActions.vue';

export default createComponent({
  setup() {
    const { formName, valid, save, reset } = useFormManager(NewCustomerForm);
    const { msg } = useI18n();

    return { msg, formName, valid, save, reset };
  },
  components: { FormItem, FormActions },
});
</script>
