import Vue from 'vue';

import {
  localize, extend, ValidationProvider, ValidationObserver,
} from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

localize('ja', ja);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', required);
