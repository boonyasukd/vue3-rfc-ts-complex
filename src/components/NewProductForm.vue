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

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import { useI18n } from '../composites/base/i18n';
import { useFormManager } from '../composites/form_management';
import { NewProductForm } from '../models';

import FormItem from './FormItem.vue';
import FormActions from './FormActions.vue';

export default createComponent({
  setup() {
    const { formName, valid, save, reset } = useFormManager(NewProductForm);
    const { msg } = useI18n();

    return { msg, formName, valid, save, reset };
  },
  components: { FormItem, FormActions },
});
</script>
