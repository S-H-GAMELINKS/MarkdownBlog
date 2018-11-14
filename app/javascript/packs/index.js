import Vue from 'vue/dist/vue.esm';
import Header from './components/layouts/Header.vue';
import Router from './router/router';
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight';

Vue.use(Highlight);

const app = new Vue({
    el: '#app',
    router: Router,
    components: {
        'nav-bar': Header
    },
})