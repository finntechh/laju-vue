import "./assets/css/index.css";
import "./assets/css/mobile.css";
import "./assets/css/burgerAnimation.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
