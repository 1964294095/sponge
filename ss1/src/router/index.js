import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import login from '../pages/login.vue'
import no3 from '../pages/no3.vue'
import register from '../pages/register.vue'
import no2 from '../pages/no2.vue'
import no1 from '../pages/no1.vue'
import no4 from '../pages/no4.vue'
import UserMessage from '../pages/UserMessage.vue'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/no4',
    	component:no4
    },
//  {
//  	path:'/xml/:id',
//  	component:User
//  }
 		{
    	path:'/UserMessage',
    	component:UserMessage
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/no3',
    	component:no3
    },
    {
    	path:'/register',
    	component:register
    },
    {
    	path:'/no2',
    	component:no2
    },
    {
    	path:'/no1',
    	component:no1
    }
   
    
  ]
})
