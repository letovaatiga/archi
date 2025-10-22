import { createRouter, createWebHistory } from "vue-router";
import { ref } from "vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// Глобальный индикатор загрузки
export const isLoading = ref(false);

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory("/archi/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

// Показываем загрузку при переходе
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

// Скрываем загрузку после перехода
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300); // можно настроить задержку
});

export default router;
