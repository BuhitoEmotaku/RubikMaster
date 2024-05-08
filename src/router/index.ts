import { createRouter, createWebHistory } from 'vue-router'
import Timer from '../views/Timer.vue';

import TopBanner from '../components/TopBanner.vue';
import BottomFooter from '../components/BottomFooter.vue';
import Routes from '../components/Routes.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      components: {
        default: () => import('../views/HomePage.vue'),
        TopBanner,
        Routes,
        BottomFooter
      }


    },
    {
      path: '/csTimer',
      name: 'csTimer',
      component: Timer,

    },
    {
      path: '/learnRubiksCube',
      name: 'learnRubiksCube',
      components: {
        default: () => import('../views/LearnRubiksCube.vue'),
        TopBanner,
        Routes,
        BottomFooter
      }
    },
    {
      path: '/algs/3x3/:algorithmType/:algorithmSubType',
      name: 'algsDataView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/AlgsDataView.vue'),
        TopBanner,
        Routes,
        BottomFooter
      }
    },
    
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
