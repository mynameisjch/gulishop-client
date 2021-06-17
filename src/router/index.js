import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入路由组件
import Home from "@/pages/Home"
import Search from '@/pages/Search'
import Login from '@/pages/Login';
import Register from '@/pages/Register'
//处理编程式导航警告问题
const orginPush = VueRouter.prototype.push;
const orginReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location,resolve,reject){
     if(resolve==undefined&&reject==undefined){
          orginPush.call(this,location,()=>{},()=>{});
     }else{
           orginPush.call(this,location,resolve,reject);
     }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve==undefined&&reject==undefined){
         orginReplace.call(this,location,()=>{},()=>{});
    }else{
          orginReplace.call(this,location,resolve,reject);
    }
}
export default new VueRouter({
     routes:[
          {
              path:'/home',
              component:Home,
              meta:{
                  show:true
              }
          }
          ,
          {
            path:'/search/:ps?',
            component:Search,
             meta:{
                show:true
            },
            name:'search',
            props:route=>({ps:route.params.ps,content:route.query.content})
            
        },
        {
            path:'/Login',
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/',
            redirect:'/home',
            meta:{
                show:false
            }
        }
     ]
})