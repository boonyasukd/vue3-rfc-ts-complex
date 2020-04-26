import { provide, inject, computed, Ref, InjectionKey } from 'vue';
import { Errors, AttributeNames, ErrorMessages } from 'validatorjs';
import { useRouter } from 'vue-router';

import { Newable } from '@/models';
import { getRules } from '@/utils/validation_rules';
import { useValidation } from '@/composites/base/validation';
import { useI18n } from '@/composites/base/i18n';
import store from '@/store';

const symbols = {
  formData: Symbol() as InjectionKey<any>,
  formLabels: Symbol() as InjectionKey<AttributeNames>,
  formErrors: Symbol() as InjectionKey<Ref<Errors>>,
};

function useFormManager(formType: Newable<any>) {
  const { getLocalizedFieldNames, getLocalizedErrorMsgs } = useI18n();
  const { push } = useRouter();

  const saveFunction = store.getters.saveFunction(formType);

  const formName = formType.name;
  const formData = store.getters.formData(formType);
  const formRules = getRules(formType);
  const formLabels = getLocalizedFieldNames(formType) as AttributeNames;
  const formErrorMsgs = getLocalizedErrorMsgs() as ErrorMessages;
  const { valid, errors } = useValidation(formData, formRules, formLabels, formErrorMsgs);

  provide(symbols.formData, formData);
  provide(symbols.formLabels, formLabels);
  provide(symbols.formErrors, errors);

  return {
    formName,
    valid,
    save() {
      saveFunction();
      push({ name: 'profileChooser' });
    },
    reset() {
      store.commit.reset();
      push({ name: 'profileChooser' });
    },
  };
}

function useFormFieldManager(fieldName: string) {
  const formData = inject(symbols.formData);
  const labels = inject(symbols.formLabels);
  const errors = inject(symbols.formErrors);

  const value = computed({
    get: () => formData[fieldName],
    set: val => {
      formData[fieldName] = val;
    },
  });
  const label = labels ? labels[fieldName] : '';
  const error = computed(() => errors?.value.first(fieldName) || '');

  return { value, label, error };
}

export { useFormManager, useFormFieldManager };
