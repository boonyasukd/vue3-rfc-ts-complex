import log from 'loglevel';
import Vue from 'vue';
import { computed } from 'vue-function-api';
import { Newable, User, NewCustomerForm, NewProductForm } from '../../models';

log.info('setting up a global store...');
const data = Vue.observable({
  user: new User(),
  formData: {
    [NewCustomerForm.name]: new NewCustomerForm(),
    [NewProductForm.name]: new NewProductForm(),
  },
});

function initStore() {
  return useStore();
}

function useStore() {
  const appLocale = computed(() => (data.user.locale ? data.user.locale : 'en'));
  const appThemeColor = computed(() => (data.user.color ? data.user.color : 'blue'));
  const isLoggedIn = computed(() => data.user.nickname != null);
  const user = computed(() => data.user);

  const login = (loginName: string) => {
    if (loginName === 'John') {
      data.user = { nickname: 'Johnny', locale: 'en', color: 'blue' };
    } else if (loginName === 'จอห์น') {
      data.user = { nickname: 'จอห์นนี่', locale: 'th', color: 'orange' };
    }
  };
  const reset = () => {
    data.user = new User();
    data.formData[NewCustomerForm.name] = new NewCustomerForm();
    data.formData[NewProductForm.name] = new NewProductForm();
  };
  const saveCustomer = () => {
    log.info(`saving a customer:\n${JSON.stringify(data.formData[NewCustomerForm.name])}`);
    // simply reset formData
    reset();
  };
  const saveProduct = () => {
    log.info(`saving a product:\n${JSON.stringify(data.formData[NewProductForm.name])}`);
    // simply reset formData
    reset();
  };

  const getFormData = (formType: Newable<any>) => data.formData[formType.name];
  const getSaveFunction = (formType: Newable<any>) => {
    switch (formType.name) {
      case NewCustomerForm.name:
        return saveCustomer;
      case NewProductForm.name:
        return saveProduct;
      default:
        throw Error(`Unsupported form model: ${formType.name}`);
    }
  };

  return { appLocale, appThemeColor, isLoggedIn, login, user, reset, getFormData, getSaveFunction };
}

export { initStore, useStore };
