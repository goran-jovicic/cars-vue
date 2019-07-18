import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'
import Login from './components/Login'
import Register from './components/AppRegister'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect : '/cars' },
  { path: '/cars', component : AppCars, name: 'cars' },
  { path: '/add', component : AddCar, name: 'add-car' },
  { path: '/edit/:id', component: AddCar, name: 'edit-car' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

// router.beforeEach((to, from, next)=> {
    
//   if(to.name !== 'login' && !authService.isAuthenticated()) {
//       return router.push( {name:'login'}); // reroute na login ako nije ulogovan
//   }

//   if(to.name === 'login' && authService.isAuthenticated()) {
//       return router.push({ name: from.name }) // vraca na stranicu gde si bio pre klika
//   }

//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
