//鉴于我们想要添加文件，所以需要修改router里边的index.js文件
//最后鉴于我们要添加新页面和组件，我们还需要增加一些components文件夹里边的东西。


//1.定义组件,可以从其它文件import进来
import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../views/Notes.vue'
import NoteDetails from '../views/NoteDetails.vue'

//2.定义路由
//每个路由应该映射一个组件。其中"component"可以是通过Vue.extend()创建的组件构造器，
//或者，只是一个组件配置对象。
const routes = [
  {
    path: '/',
    component: Notes   //以上就保证一个URL对应一个组件，同时一个"/"和URL对应一个Notes组件
  },
  {
    path: '/note/:id',
    component: NoteDetails
  }
]

//创建router实例（用createRouter来实例化），然后传‘routes’配置
const router = createRouter({
  history: createWebHistory(),
  hash: false,
  routes //传‘routes’配置
})



export default router
