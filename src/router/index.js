import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import ('@/view/Index.vue')
    }
  , {
    path:'/menu',
    name: 'menu',
    component: ()=> import ('@/view/Product/Menu.vue')
  },
  {
    path:'/delivery',
    name: 'delivery',
    component: ()=> import ('@/view/Delivery.vue')
  },
  {
    path:'/help',
    name: 'help',
    component: ()=> import ('@/view/Help.vue')
  },
  {
    path:'/faqs',
    name: 'faqs',
    component: ()=> import ('@/view/FAQS.vue')
  },
  {
    path:'/about',
    name: 'about',
    component: ()=> import ('@/view/About.vue')
  },
  {
    path:'/blogs',
    name: 'blogs',
    component: ()=> import ('@/view/Blogs.vue')
  },
  {
    path:'/product',
    name: 'product',
    component: ()=> import ('@/view/Product/SingleProduct.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component: ()=> import ('@/view/Cart/Cart.vue')
  },
  {
    path:'/checkout',
    name: 'checkout',
    component: ()=> import ('@/view/Checkout/Checkout.vue')
  },
  {
    path:'/login',
    name: 'login',
    component: ()=> import ('@/view/Login_Register/LogIn.vue')
  },
  {
    path:'/register',
    name: 'register',
    component: ()=> import ('@/view/Login_Register/Register.vue')
  },
  
  
]
})

export default router