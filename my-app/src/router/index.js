import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '../pages/shouye'
import DianYing from '../pages/dianying'
import GuangBo from '../pages/guangbo'
import TuShu from '../pages/tushu'
import XiaoZu from '../pages/xiaozu'
import ReYing from '../pages/reying'
import XinBang from '../pages/xinbang'
import ZhuCe from '../pages/zhuce'
import Login from '../pages/login'
import Feilei from '../components/feilei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/shouye',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/dianying',
      name: 'DianYing',
      component: DianYing
    },
    {
      path: '/guangbo',
      name: 'GuangBo',
      component: GuangBo
    },
    {
      path: '/tushu',
      name: 'TuShu',
      component: TuShu
    },
    {
      path: '/xiaozu',
      name: 'XiaoZu',
      component: XiaoZu
    },
    {
      path: '/reying',
      name: 'ReYing',
      component: ReYing
    },
    {
      path: '/xinbang',
      name: 'XinBang',
      component: XinBang
    },
    {
      path: '/zhuce',
      name: 'ZhuCe',
      component: ZhuCe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/feilei',
      name: 'Feilei',
      component: Feilei
    }

  ]
})
