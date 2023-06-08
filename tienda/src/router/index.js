import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import IndexProductoApp from '../views/productos/IndexProductoApp.vue'
import ShowProductoApp from '../views/productos/ShowProductoApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/login', name: 'login', component: LoginApp },
  { path: '/shop', name: 'shop', component: IndexProductoApp },
  { path: '/producto/:slug', name: 'show-producto', component: ShowProductoApp },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
