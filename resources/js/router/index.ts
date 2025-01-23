import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";

import App from '@/App.vue';

const routes = [
  {
    path: "/",
    name: "/",
    component: App,
    meta: {
      title: "App",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// const tryFlash = () => {
//   store.dispatch("session/flash");
// };
//
// router.beforeEach(async (to, from, next) => {
//   // ensure we checked if the user is authenticated
//   if (store.state.auth.user === null) {
//     const { checkAuth } = useAuth();
//     await checkAuth();
//   }
//
//   let middlewares = [
//     ...new Set(to.matched.map((record) => record.meta.middleware ?? []).flat()),
//   ];
//
//   for (let middleware of middlewares) {
//     const { passes, onFail } = middleware();
//
//     if (!(await passes())) {
//       onFail(next);
//
//       return;
//     }
//   }
//
//   next();
// });
//
// router.afterEach((to, from, failure) => {
//   if (!isNavigationFailure(failure)) {
//     document.title = to.meta.title;
//
//     tryFlash();
//   }
// });

export default router;
