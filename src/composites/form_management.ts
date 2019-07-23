import { provide, computed, Wrapper } from 'vue-function-api';
import { Errors, AttributeNames, ErrorMessages } from 'validatorjs';

import { Key, inject } from '../utils/injection';
import { getRules } from '../utils/validation_rules';
import { Newable } from '../models';

import { useValidation } from './base/validation';
import { useStore } from './base/store';
import { useRouter } from './base/router';
import { useI18n } from './base/i18n';

const symbols = {
  formData: Symbol() as Key<any>,
  formLabels: Symbol() as Key<AttributeNames>,
  formErrors: Symbol() as Key<Wrapper<Errors>>,
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

  provide({
    [symbols.formData as symbol]: formData,
    [symbols.formLabels as symbol]: formLabels,
    [symbols.formErrors as symbol]: errors,
  });

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

  const value = computed(
    () => formData[fieldName],
    val => {
      formData[fieldName] = val;
    },
  );
  const label = computed(() => labels[fieldName]);
  const error = computed(() => errors.value.first(fieldName));

  return { value, label, error };
}

export { useFormManager, useFormFieldManager };
