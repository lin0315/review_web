// 1.导入router vue插件
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'

// 使用路由懒加载
const Home = () => import('../views/Home')
const HomeNews = () => import('../components/Home/HomeNews')
const HomeMessages = () => import('../components/Home/HomeMessages')
const About = () => import('../views/About')
const User = () => import('../views/User')
const Profile = () => import('../views/Profile')

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about/:mes',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    },
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active' //属于活跃的路由标签会自动添加该类
})

// 导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router