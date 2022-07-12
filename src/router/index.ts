import {createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized} from "vue-router";
import { auth } from "@chia/lib/firebase/config";

const HomePage = () => import("../pages/HomePage.vue");
const NotFoundPage = () => import("../pages/exceptions/404.vue");
const ProductDetailPage = () => import("../pages/ProductDetailPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");
const ProductListPage = () => import("../pages/ProductListPage.vue");
const LoginPage = () => import("../pages/LoginPage.vue");
const ProfilePage = () => import("../pages/ProfilePage.vue");
const RegisterPage = () => import("../pages/RegisterPage.vue");

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
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
        beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
            auth.onAuthStateChanged(user => {
                if (user) next('/home')
                else next()
            });
        }
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
        beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
            auth.onAuthStateChanged(user => {
                if (user) next('/home')
                else next()
            });
        }
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

router.beforeEach((to, from, next) => {
    auth.onAuthStateChanged(user => {
        if (to.name === 'LoginPage' || to.name === 'RegisterPage') {
            if (user) next('/home')
            else next()
        } else {
            if (user) next()
            else next('/login')
        }
    });
})

export default router;
