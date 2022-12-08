import Vue from 'vue'
import Router from 'vue-router'
import mainComponent from '@/components/Main/mainComponent'
Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'main',
    component: mainComponent
  },
  {
    path: '/program',
    name: 'program',
    component: mainComponent
  },
  {
    path: '/about_us',
    name: 'about_us',
    component: mainComponent
  },
  {
    path: '/blog',
    name: 'blog',
    component: mainComponent
  },
  {
    path: '/contact',
    name: 'contact',
    component: mainComponent
  }
]

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
