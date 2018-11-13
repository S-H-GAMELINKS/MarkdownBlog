import Vue from 'vue/dist/vue.esm';
import Header from './components/layouts/Header.vue';
import Router from './router/router';

const app = new Vue({
    el: '#app',
    router: Router,
    components: {
        'nav-bar': Header
    },
    data: function() {
        return {
            message: "Welcome to Markdown Blog App!"
        }
    }
})