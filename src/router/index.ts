import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/exceptions/404.vue";
import ProductPage from "../pages/ProductPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProductListPage from "../pages/ProductListPage.vue";


const routes = [
    {
        path: "/",
        name: 'HomePage',
        component: HomePage
    },
    {
        path: "/home",
        redirect: "/"
    },
    {
        path: "/product/:id",
        name: "ProductPage",
        component: ProductPage,
        props:true
    },
    {
        path: "/contact",
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: "/product",
        name: "ProductListPage",
        component: ProductListPage
    },
    {
        path: "/:catchAll(.*)",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
});

export default router;
