import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/site/Index'

import BadgeDeom from '@/components/badge/demo/Index'
import IconDeom from '@/components/icon/demo/Index'
import CellDemo from '@/components/cell/demo/Index'
import AvatarDemo from '@/components/avatar/demo/Index'
import ButtonDemo from '@/components/button/demo/Index'
import NavbarDemo from '@/components/navbar/demo/Index'
import ModalDemo from '@/components/modal/demo/Index'
import PullLoadDemo from '@/components/pullload/demo/Index'
import PopoverDemo from '@/components/popover/demo/Index'
import SwitchDemo from '@/components/switch/demo/Index'
import ToastDemo from '@/components/toast/demo/Index'

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
    },
    {
      path: '/demo/navbar',
      name: 'NavbarDemo',
      component: NavbarDemo
    },
    {
      path: '/demo/modal',
      name: 'ModalDemo',
      component: ModalDemo
    },
    {
      path: '/demo/pullload',
      name: 'PullLoadDemo',
      component: PullLoadDemo
    },
    {
      path: '/demo/popover',
      name: 'PopoverDemo',
      component: PopoverDemo
    },
    {
      path: '/demo/switch',
      name: 'SwitchDemo',
      component: SwitchDemo
    },
    {
      path: '/demo/toast',
      name: 'ToastDemo',
      component: ToastDemo
    }
  ]
})
