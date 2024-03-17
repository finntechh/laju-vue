import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import ÜberUns from "@/views/ÜberUns.vue";
import Kontakt from "@/views/Kontakt.vue";
import Datenschutz from "@/views/Datenschutz.vue";
import Impressum from "@/views/Impressum.vue";

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
    },
    {
      path: "/News",
      name: "News",
      component: News,
    },
    {
      path: "/Über-uns",
      name: "Über uns",
      component: ÜberUns,
    },
    {
      path: "/Kontakt",
      name: "Kontakt",
      component: Kontakt,
    },
    {
      path: "/Datenschutz",
      name: "Datenschutz",
      component: Datenschutz,
    },
    {
      path: "/Impressum",
      name: "Impressum",
      component: Impressum,
    },
  ],
});

export default router;
