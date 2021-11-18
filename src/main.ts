import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
// 注入路由
import router from "./router/index";
// 全局引入ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
