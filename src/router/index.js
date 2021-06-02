import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyHomepage from '@/components/MyHomepage'
import ReadTogether from '@/components/ReadTogether'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/thepurplecircle',
      name: 'MyHomepage',
      component: MyHomepage
    },
    {
      path: '/readtogether',
      name: 'ReadTogether',
      component: ReadTogether
    }
  ]
})
