import { createRouter, createWebHistory } from "vue-router";
import ProductPage from "../pages/ProductPage.vue";
import NotFoundPage from "../pages/exceptions/404.vue";


const routes = [
    {
        path: "/",
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: "/products",
        redirect: "/"
    },
    {
        path: "/:catchAll(.*)",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
