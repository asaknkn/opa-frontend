import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import WebPayment from '../views/WebPayment.vue';
Vue.use(VueRouter);
export var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/webpayment',
        name: 'WebPayment',
        component: WebPayment
        // component: () => import(/* webpackChunkName: "about" */ '../views/WebPayment.vue')
    },
];
var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map