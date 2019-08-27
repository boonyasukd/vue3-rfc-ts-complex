import { provide, inject, computed, Ref, InjectionKey } from '@vue/composition-api';
import { Errors, AttributeNames, ErrorMessages } from 'validatorjs';

import { getRules } from '../utils/validation_rules';
import { Newable } from '../models';

import { useValidation } from './base/validation';
import { useStore } from './base/store';
import { useRouter } from './base/router';
import { useI18n } from './base/i18n';

const symbols = {
  formData: Symbol() as InjectionKey<any>,
  formLabels: Symbol() as InjectionKey<AttributeNames>,
  formErrors: Symbol() as InjectionKey<Ref<Errors>>,
};

function useFormManager(formType: Newable<any>) {
  const { getFormData, getSaveFunction, reset: resetStore } = useStore();
  const { getLocalizedFieldNames, getLocalizedErrorMsgs } = useI18n();
  const { push } = useRouter();

  const saveFunction = getSaveFunction(formType);

  const formName = formType.name;
  const formData = getFormData(formType);
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
      resetStore();
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
  const error = computed(() => (errors ? errors.value.first(fieldName) : ''));

  return { value, label, error };
}

export { useFormManager, useFormFieldManager };
