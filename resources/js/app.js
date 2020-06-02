import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'

import Modal from '@/components/Modal.vue';


require('./bootstrap');

window.Vue = Vue;

Vue.use(InertiaApp)

console.log(window.route);
console.log(window.$);

Vue.mixin({
    methods: {
        route: window.route,
        hasKeys: (errors = {}) => !Object.keys(errors).length,
    },
});

Vue.component(Modal.name, Modal);

const app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app);