import log from 'loglevel';
import { createDirectStore } from 'direct-vuex';
import { Newable, User, NewCustomerForm, NewProductForm } from '@/models';

const { store } = createDirectStore({
  state: {
    user: new User(),
    formData: {
      [NewCustomerForm.name]: new NewCustomerForm(),
      [NewProductForm.name]: new NewProductForm(),
    },
  },
  getters: {
    appLocale: ({ user }) => (user.locale ? user.locale : 'en'),
    isLoggedIn: ({ user }) => (user.nickname !== null),
    appThemeColor: ({ user }) => (user.color ? user.color : 'blue'),
    formData: ({ formData }) => (formType: Newable<any>) => formData[formType.name],
    saveFunction: () => (formType: Newable<any>): () => void => {
      switch (formType.name) {
        case NewCustomerForm.name:
          return store.commit.saveCustomer;
        case NewProductForm.name:
          return store.commit.saveProduct;
        default:
          throw Error(`Unsupported form model: ${formType.name}`);
      }
    },
  },
  mutations: {
    login: (state, loginName: string) => {
      if (loginName === 'John') {
        state.user = { nickname: 'Johnny', locale: 'en', color: 'blue' };
      } else if (loginName === 'จอห์น') {
        state.user = { nickname: 'จอห์นนี่', locale: 'th', color: 'orange' };
      }
    },
    reset: (state) => {
      state.user = new User();
      state.formData[NewCustomerForm.name] = new NewCustomerForm();
      state.formData[NewProductForm.name] = new NewProductForm();
    },
    saveCustomer: (state) => {
      log.info(`saving a customer:\n${JSON.stringify(state.formData[NewCustomerForm.name])}`);
      store.commit.reset();
    },
    saveProduct: (state) => {
      log.info(`saving a product:\n${JSON.stringify(state.formData[NewProductForm.name])}`);
      store.commit.reset();
    },
  },
});

export default store;
