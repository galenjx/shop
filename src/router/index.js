import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detal from '../views/Detal.vue'
import analysis from '../components/analysis.vue'
import forecast from '../components/forecast.vue'
import count from '../components/count.vue'
import publish from '../components/publish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Detal.vue')
    component: Detal,
    children: [
      { path: 'analysis', component: analysis },
      { path: 'count', component: count },
      { path: 'forecast', component: forecast },
      { path: 'publish', component: publish }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
