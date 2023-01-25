import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Post from '@/views/profile/Post.vue'
import Todo from '@/views/profile/Todo.vue'


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/profile/:id',
    component: Profile,
    children: [
      {
        path: 'post',
        component: Post,
      },
      {
        path: 'todo',
        component: Todo,
      },
    ],
    beforeEnter: (to, from, next) => {
      console.log('from.path', from.path)
      console.log('to.path', to.path)
      next()
      /* 
        if(loggedInn && to.path !== '/login') {
          next();
        } else {
          next('/login');
        }
      */
    },
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* router.beforeEach((to, from, next) => {
  console.log('from.path', from.path)
  console.log('to.path', to.path)
  next()
  
    if(loggedInn && to.path !== '/login') {
      next();
    } else {
      next('/login');
    }
 
}) */

export default router;
