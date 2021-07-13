import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyHomepage from '@/components/MyHomepage'
import ReadTogether from '@/components/ReadTogether'
import EndOfTheUniverse from '@/components/EndOfTheUniverse'
import TeganAndSara from '@/components/TeganAndSara'

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
    },
    {
      path: '/endoftheuniverse',
      name: 'EndOfTheUniverse',
      component: EndOfTheUniverse
    },
    {
      path: '/teganandsara',
      name: 'TeganAndSara',
      component: TeganAndSara
    }
  ]
})
