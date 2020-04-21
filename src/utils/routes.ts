import { markRaw } from 'vue';
import { Route } from '../models';
import ProfileChooser from '../components/ProfileChooser.vue';
import FormChooser from '../components/FormChooser.vue';
import NewCustomerForm from '../components/NewCustomerForm.vue';
import NewProductForm from '../components/NewProductForm.vue';

const routes = [
  {
    path: '/',
    name: 'profileChooser',
    component: markRaw(ProfileChooser),
  },
  {
    path: '/formChooser',
    name: 'formChooser',
    component: markRaw(FormChooser),
  },
  {
    path: '/newCustomer',
    name: 'newCustomer',
    component: markRaw(NewCustomerForm),
  },
  {
    path: '/newProduct',
    name: 'newProduct',
    component: markRaw(NewProductForm),
  },
] as Route[];

export { routes };
