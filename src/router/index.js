import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/site/Index'

import BadgeDeom from '@/components/badge/demo/Index'
import IconDeom from '@/components/icon/demo/Index'
import CellDemo from '@/components/cell/demo/Index'
import AvatarDemo from '@/components/avatar/demo/Index'
import ButtonDemo from '@/components/button/demo/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/demo/badge',
      name: 'BadgeDeom',
      component: BadgeDeom
    },
    {
      path: '/demo/icon',
      name: 'IconDeom',
      component: IconDeom
    },
    {
      path: '/demo/cell',
      name: 'CellDemo',
      component: CellDemo
    },
    {
      path: '/demo/avatar',
      name: 'AvatarDemo',
      component: AvatarDemo
    },
    {
      path: '/demo/button',
      name: 'ButtonDemo',
      component: ButtonDemo
    }
  ]
})
