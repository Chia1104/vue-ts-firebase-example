import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../pages/HomePage.vue");
const NotFoundPage = () => import("../pages/exceptions/404.vue");
const ProductDetailPage = () => import("../pages/ProductDetailPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");
const ProductListPage = () => import("../pages/ProductListPage.vue");


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
        component: ProductDetailPage,
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
