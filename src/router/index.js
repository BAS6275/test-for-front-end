import Vue from 'vue'
import VueRouter from 'vue-router'
import TestFormAndValidation from "../views/Test-form-and-validation.vue";
import FetchPokemonsApi from "../views/Fetch-Pokemon's-API.vue";
import Function1 from "../views/Function-1.vue";
import Function2 from "../views/Function-2.vue";
import Function3 from "../views/Function-3.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: "/",
    name: "testFormAndValidation",
    component: TestFormAndValidation,
  },
  {
    path: "/Fetch-Pokemon's-API",
    name: "fetchPokemonsApi",
    component: FetchPokemonsApi,
  },
  {
    path: "/Function-1",
    name: "function1",
    component: Function1,
  },
  {
    path: "/Function-2",
    name: "function2",
    component: Function2,
  },
  {
    path: "/Function-3",
    name: "function3",
    component: Function3,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
