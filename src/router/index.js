import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import Home from '../views/Home.vue'
// import axios from 'axios'

// /* 测试组件 */
// import TreeMenu from '../components/TreeMenu.vue'
// import ProductStart from '../components/ProductStart.vue'
// import OrderManager from '../components/OrderManager.vue'
// import ComponentHead from "@/components/ComponentHead"
// import ComponentUserInfo from "@/components/user/ComponentUserInfo"

// // Vue.use(axios)


// import NoSuccessUserOrder from "@/components/order/NoSuccessUserOrder"
// import SuccessUserOrder from "@/components/order/SuccessUserOrder"

// import ComponentOrderData from "@/components/order/ComponentOrderData"
/* 页面 */
import Login from '@/views/Login'
import Home from "@/views/Home"
import ProductManager from "@/views/user-page/ProductManager"
import OrderManager from "@/views/user-page/OrderManager"

/* 组件 */
import NoSuccessUserOrder from "@/components/order-component/NoSuccessUserOrder"

const routes = [
  //跳转到登录界面
  {
    path: "/",redirect: "/login"          
  },
  // 登录路由
  {
    path: "/login", component: Login      
  },
  //首页路由
  {
    path: "/home/:username", component: Home, children: [  
      {
        path: "", component: null
      },     
      {
        path: "product-manager", component: ProductManager            // 商品管理路由
      },
      {
        path: "up-product-manager", component: null                   // 上线的商品管理         
      },
      {
        path: "order-manager", component: OrderManager, children:[    // 订单管理路由 
          {
            path: "NoSuccessOrder", component: NoSuccessUserOrder
          }
        ]          
      },
      {
        path: "deal-manager", component: null                         // 交易管理路由
      },
      {
        path:"system-bill", component: null                           // 系统缴费通知      
      },
      {
        path:"system-email", component: null                          // 系统邮件
      }
    ]
  }
  

];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



export default router
