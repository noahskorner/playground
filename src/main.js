import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import IconButton from "./components/ui/IconButton.vue";
import Card from "./components/ui/Card.vue";
import TextField from "./components/ui/TextField.vue";
import Message from "./components/ui/Message.vue";
import Switch from "./components/ui/Switch.vue";

const app = createApp(App);
app.component("IconButton", IconButton);
app.component("Card", Card);
app.component("TextField", TextField);
app.component("Message", Message);
app.component("Switch", Switch);
app.use(store).use(router).mount("#app");
