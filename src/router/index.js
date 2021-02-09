import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "",
    routes: [
        {
            path: "/",
            name: "Auth",
            component: () => import("@/views/Auth.vue"),
            children: [],
        },
        {
            path: "/dialer",
            name: "Dialer",
            component: () => import("@/views/Dialer.vue"),
            meta: {auth: true},
            children: [],
        }
    ],
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (
        to.matched.some((record) => record.meta.auth) &&
        loggedIn == null &&
        token == null
    )
    {
        next({
            path: "/",
            query: {redirect: to.fullPath},
        });
    }
    next();
});

export default router;