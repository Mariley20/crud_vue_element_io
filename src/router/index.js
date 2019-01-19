import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import HelloWorld from './components/HelloWorld'

// const Welcome = () => import('./components/HelloWorld').then(m => m.default || m)

export const router = new VueRouter({
  routes: [
    // { path: '/welcome', component: Welcome }
  ]
})