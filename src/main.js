import router from "./router";
import Vue, {createApp} from "vue";
import App from "./App.vue";
import store from "./store";
//import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

//Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    createApp(App).use({
      router,
      store,
      //render: (h) => h(App),
    }).mount("#app");
  }
});


