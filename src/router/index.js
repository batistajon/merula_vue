import Vue from 'vue';
import Router from 'vue-router';
import BaseComponent from '@/BaseComponent/BaseComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseComponent',
      component: BaseComponent
    }
  ]
});
