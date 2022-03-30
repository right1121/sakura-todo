import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle,
  faCircleCheck,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default function initAwesome() {
  library.add(
    faCircle,
    faCircleCheck,
  );
  Vue.component('font-awesome-icon', FontAwesomeIcon);
}
