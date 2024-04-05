import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookies from "./plugins/cookies";
import axios from "./plugins/axios";

import type { AxiosInstance } from "axios";
import type { Store } from "vuex";
import { Cookies } from "cookies-ts";

declare module "@vue/runtime-core" {
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $store: Store<State>;
    $cookies: Cookies;
  }
}

createApp(App).use(store).use(cookies).use(axios, {}).use(router).mount("#app");
