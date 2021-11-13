import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
import Header from '@/components/shared/Header.vue';
import HomePage from '@/components/HomePage.vue'
import Books from '@/views/books/book.vue'
import Orders from '@/views/orders/orders.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    components: {
        default: HomePage,
        'header-top': Header
    },
    meta: {
        requiresAuth: true
    }
},
{
    path: '',
    name: 'books',
    components: {
        default: Books,
        'header-top': Header
    },
    meta: {
        requiresAuth: true
    }
},
{
    path: '/orders',
    name: 'orders',
    components: {
        default: Orders
    }
},
{
    path: '*',
    redirect: '/'
}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        const fromHistory = Boolean(savedPosition);

        if (fromHistory && store.state.routerHistory.length > 0) {
            store.state.routerHistory.splice(-1, 1);
        } else {
            store.state.routerHistory.push(from);
        }

        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
        return {
            x: 0,
            y: 0
        };
    }
})

export default router