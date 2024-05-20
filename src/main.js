import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

let app;

firebase.auth().onAuthStateChanged(() => {
  app = createApp(App)
  app.use(router)
  app.use(store)
  app.mount('#app')
});
 

