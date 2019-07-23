import { Route } from '../models';
import ProfileChooser from '../components/ProfileChooser.vue';
import FormChooser from '../components/FormChooser.vue';
import NewCustomerForm from '../components/NewCustomerForm.vue';
import NewProductForm from '../components/NewProductForm.vue';

const routes = [
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
] as Route[];

export { routes };
