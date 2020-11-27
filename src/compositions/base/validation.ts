import log from 'loglevel';
import { watch, ref, Ref } from 'vue';
import Validator, { Rules, AttributeNames, ErrorMessages, Errors } from 'validatorjs';

function useValidation(
  model: any,
  rules: Rules,
  localizedFieldNames: AttributeNames,
  localizedErrorMsgs: ErrorMessages,
) {
  log.info('setting up validation...');
  const valid = ref(false);
  const errors: Ref<Errors> = ref({ first: () => false } as unknown as Errors);
  const validateAll = () => {
    const validator = new Validator(model, rules, localizedErrorMsgs);
    validator.setAttributeNames(localizedFieldNames);

    valid.value = Boolean(validator.passes());
    errors.value = validator.errors;
  };

  for (const prop of Object.keys(rules)) {
    watch(() => model[prop], validateAll);
  }

  return { valid, errors };
}

export { useValidation };
