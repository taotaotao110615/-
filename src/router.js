import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Cont from '@/components/cont.vue'
import Xianqing from '@/components/xianqing.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component:Index,
    name:'Index',
    },
      {path:'/cont',
          component:Cont,
          name:'cont',
      },
      {
          path:'/xianqing',
          component:Xianqing,
          name:'xianqing',
      },

  ]
})
