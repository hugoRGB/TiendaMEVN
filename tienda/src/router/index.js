import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import IndexProductoApp from '../views/productos/IndexProductoApp.vue'
import ShowProductoApp from '../views/productos/ShowProductoApp.vue'
import CarritoApp from '../views/CarritoApp.vue'
import DireccionesApp from '../views/cuenta/DireccionesApp.vue'
import CheckoutApp from '../views/CheckoutApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: LoginApp },
  { path: '/shop', name: 'shop', component: IndexProductoApp },
  { path: '/producto/:slug', name: 'show-producto', component: ShowProductoApp },
  { path: '/cart', name: 'cart', component: CarritoApp },
  { path: '/cuenta/direcciones', name: 'direcciones', component: DireccionesApp },
  { path: '/checkout', name: 'checkout', component: CheckoutApp },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
