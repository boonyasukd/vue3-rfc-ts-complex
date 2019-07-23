import { inject as vueInject } from 'vue-function-api';

// temporary until new version of vue-function-api is released

// overlay type T onto symbol
interface Key<T> extends Symbol {}

// inject function that automatically cast to appropriate type T
const inject = <T>(key: Key<T>) => vueInject(key as symbol) as T;

export { Key, inject };
