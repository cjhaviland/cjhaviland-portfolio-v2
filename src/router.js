import Vue from 'vue';
import Router from 'vue-router';
import About from './views/Portfolio.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'portfolio'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import(/* webpackChunkName: "skills" */ './views/Skills.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/background',
      name: 'background',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "background" */ './views/Background.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    }
  ],
});
