import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'
import Login from './components/Login'
import Register from './components/AppRegister'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect : '/cars' },
  { path: '/cars', component : AppCars },
  { path: '/add', component : AddCar },
  { path: '/edit/:id', component: AddCar },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
