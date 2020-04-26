import { createRouter, createWebHashHistory } from 'vue-router';
import ProfileChooser from './components/ProfileChooser.vue';
import FormChooser from './components/FormChooser.vue';
import NewCustomerForm from './components/NewCustomerForm.vue';
import NewProductForm from './components/NewProductForm.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'profileChooser',
      component: ProfileChooser,
    },
    {
      path: '/formChooser',
      name: 'formChooser',
      component: FormChooser,
    },
    {
      path: '/newCustomer',
      name: 'newCustomer',
      component: NewCustomerForm,
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: NewProductForm,
    },
  ],
});

export default router;
