import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import Index from '../components/web/Index.vue';
import About from '../components/web/About.vue';
import Contact from '../components/web/Contact.vue';
import Blogs from '../components/blogs/Index.vue';
import New from '../components/blogs/New.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/blogs', component: Blogs },
    { path: '/blogs/new', component: New },
  ],
})