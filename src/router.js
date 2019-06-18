import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Partol from "./views/Partol.vue";
import Lite from "./views/Lite.vue";
import Qrcode from "./components/portal/Qrcode.vue";
import Register from "./components/portal/Register.vue";
import AppDetail from "./components/portal/AppDetail.vue";
import AppList from "./components/portal/AppList.vue";
import FourthScreen from "./components/home/FourthScreen.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/partol",
      name: "partol",
      component: Partol,
      children: [
        {
          path: "qrcode",
          name: "qrcode",
          component: Qrcode
        },
        {
          path: "register",
          name: "register",
          component: Register
        },
        {
          path: "appdetail",
          name: "appdetail",
          component: AppDetail
        },
        {
          path: "applist",
          name: "applist",
          component: AppList
        }
      ]
    },
    {
      path: "/lite",
      name: "lite",
      component: Lite
    },
    {
      path: "/test",
      name: "test",
      component: FourthScreen
    }
  ]
});
