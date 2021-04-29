import { createApp } from 'vue'
import App from './App.vue'
import PortalVue from "portal-vue";

createApp(App)
  .use(PortalVue)
  .mount('#app')
