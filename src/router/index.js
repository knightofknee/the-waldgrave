import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyHomepage from '@/components/MyHomepage'
import ReadTogether from '@/components/ReadTogether'
import EndOfTheUniverse from '@/components/EndOfTheUniverse'
import TeganAndSara from '@/components/TeganAndSara'
import SocialSecurityFix from '@/components/SocialSecurityFix'
import ClimateChangeStrats from '@/components/ClimateChangeStrats'
import Brainstree from '@/components/Brainstree'
import PresidentialPlans from '@/components/PresidentialPlans'
import Story from '@/components/Story'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
    },
    {
      path: '/fixingsocialsecurity',
      name: 'SocialSecurityFix',
      component: SocialSecurityFix
    },
    {
      path: '/climatechangestrats',
      name: 'ClimateChangeStrats',
      component: ClimateChangeStrats
    },
    {
      path:'/brainstree',
      name: 'Brainstree',
      component: Brainstree
    },
    {
      path:'/presidentialplans',
      name: 'PresidentialPlans',
      component: PresidentialPlans
    },
    {
      path:'/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/*',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
