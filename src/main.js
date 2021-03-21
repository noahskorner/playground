import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import IconButton from "./components/ui/IconButton.vue";
import Card from "./components/ui/Card.vue";
import TextField from "./components/ui/TextField.vue";

const app = createApp(App);
app.component("IconButton", IconButton);
app.component("Card", Card);
app.component("TextField", TextField);
app.use(store).use(router).mount("#app");
