import Vue from 'vue';
import Router from 'vue-router';
// import header from '@/components/header/header';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  }
];

export default new Router({
  routes,
  linkActiveClass: 'active'     // 修改vue中被选中元素的默认类名
});
