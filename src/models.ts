import Vue, { VueConstructor } from 'vue';

type Newable<T> = { new (...args: any[]): T; };

class Route {
  path: string = 'unknown';
  name: string = 'unknown';
  component?: VueConstructor<Vue>;
}

class User {
  nickname: string | null = null;
  locale: string | null = null;
  color: string | null = null;
}

class NewCustomerForm {
  firstName: string | null = null;
  lastName: string | null = null;
  address: string | null = null;
  phoneNum: string | null = null;
  email: string | null = null;
}

class NewProductForm {
  name: string | null = null;
  description: string | null = null;
  productCode: string | null = null;
  price: number | null = null;
}

export { Newable, Route, User, NewCustomerForm, NewProductForm };
