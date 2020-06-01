import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';

import wysiwyg from "vue-wysiwyg";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Modal from '@/components/Modal.vue';

console.log("This is craxy");

require('./bootstrap');

window.Vue = require('vue');

Vue.use(InertiaApp);

Vue.use(wysiwyg, { hideModules: { "image": false, 'table': false, 'removeFormat': false, 'separator': false },});

Vue.mixin({
    methods: {
        route: window.route,
        hasKeys: (errors = {}) => !Object.keys(errors).length,
    },
});
Vue.component(Modal.name, Modal);

console.log("This is craxy");

const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
