import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import UeberUns from "@/views/UeberUns.vue";
import Kontakt from "@/views/Kontakt.vue";
import Datenschutz from "@/views/Datenschutz.vue";
import Impressum from "@/views/Impressum.vue";
import {computedEager} from "@vueuse/core";
import {createCommentVNode} from "vue";

let titlePrefix = "";
let titleSuffix = " - Landjugend Primisweiler";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/Home",
    },
    {
      path: "/Home",
      name: "home",
      component: Home,
      meta: {
        titlePrefix: "Home",
      }
    },
    {
      path: "/News",
      name: "News",
      component: News,
      meta: {
        titlePrefix: "News",
      }
    },
    {
      path: "/Über-uns",
      name: "Über uns",
      component: UeberUns,
      meta: {
        titlePrefix: "Über uns",
      }
    },
    {
      path: "/Kontakt",
      name: "Kontakt",
      component: Kontakt,
      meta: {
        titlePrefix: "Kontakt",
      }
    },
    {
      path: "/Datenschutz",
      name: "Datenschutz",
      component: Datenschutz,
      meta: {
        titlePrefix: "Datenschutz",
      }
    },
    {
      path: "/Impressum",
      name: "Impressum",
      component: Impressum,
      meta: {
        titlePrefix: "Impressum",
      }
    },
  ],
});

router.beforeEach((to, from ) => {
  document.title = to.meta?.titlePrefix + titleSuffix ?? "Default Title";
})

export default router;
