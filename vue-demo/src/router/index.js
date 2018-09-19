import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'
import article from '@/components/content/article'
import comment from '@/components/content/comment'
import report from '@/components/content/report'
import newUsers from '@/components/users/newUsers'
import activeUsers from '@/components/users/activeUsers'
import active from '@/components/statistic/active'
import increase from '@/components/statistic/increase'
import stay from '@/components/statistic/stay'
import lose from '@/components/statistic/lose'
import time from '@/components/statistic/time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    // {
    //   path: '/article',
    //   name: 'article',
    //   component: article
    // },
    {
      path: '/detail',
      name: '内容管理',
      component: detail,
      children: [
        {
          path: 'content/article',
          name: '文章管理',
          component: article
        },
        {
          path: 'content/comment',
          name: '评论管理',
          component: comment
        },
        {
          path: 'content/report',
          name: '举报管理',
          component: report
        }
      ]
    },
    {
      path: '/detail',
      name: '用户管理',
      component: detail,
      children: [
        {
          path: 'users/newUsers',
          name: '新增用户',
          component: newUsers
        },
        {
          path: 'users/activeUsers',
          name: '新增用户',
          component: activeUsers
        },
      ]
    },
    {
      path: '/detail',
      name: '统计分析',
      component: detail,
      children: [
        {
          path: 'statistic/increase',
          name: '新增和启动',
          component: increase
        },
        {
          path: 'statistic/active',
          name: '活跃分析',
          component: active
        },
        {
          path: 'statistic/time',
          name: '时段分析',
          component: time
        },
        {
          path: 'statistic/stay',
          name: '用户留存',
          component: stay
        },
        {
          path: 'statistic/lose',
          name: '流失用户',
          component: lose
        }
      ]
    }
  ]
})
