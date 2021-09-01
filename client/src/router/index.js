import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Main from '../components/Main'
import About from '../components/AboutComponent'
import Home from '../components/HomeComponent'
import HelloWorld from '../components/HelloWorld' // 로그인 컴포넌트를 import 한다
import Topnav from "@/components/Topnav";
import SignUp from "@/components/SignUp";
import Customer from "@/components/Customer";
import MainPage from '../components/MainPage';
import CustomerList from '../components/CustomerList';
import CustomerUpdate from  '../components/CustomerUpdate'


Vue.use(VueRouter)


export default new VueRouter({
  mode : 'history',
  routes: [
    {
      path :'',
      name : 'home',
      component: Login,
      // children: [{
      //   path :'top',
      //   component :Topnav,
      // },
      // ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path :'/main',
      name : 'main',
      component: Main,
    },
    {
      path :'/home',
      name : 'home_com',
      component: Home,
    },
    {
      path :'/about',
      name : 'about',
      component: About,
    },
    {
      path :'/top',
      name : 'top',
      component: Topnav,
    },
    {
      path :'/sign',
      name : 'sign',
      component: SignUp,
    },
    {
      path :'/customer',
      name : 'customer',
      component: Customer,
    },
    {
      path :'/list',
      name : 'customer_list',
      component: CustomerList,
    },
    {
      path :'/update',
      name : 'customer_update',
      component: CustomerUpdate,
    },
    {
      path :'/mainpage',
      name : 'MainPage',
      component: MainPage,
    },
  ]
})
