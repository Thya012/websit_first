import { createRouter, createWebHistory } from 'vue-router'
//const Home = () => import('@/pages/Home.vue')
import Home from '@/pages/Home.vue'
const  About = () => import( '@/components/About.vue')
const Menu = () => import( '@/components/Menu.vue')
//const Special = () => import( '@/components/Special.vue')
const GetApi = () => import( '@/components/api/GetApi.vue')
const Services = () => import( '@/components/Services.vue')
const NotFound = () => import('@/components/NotFound.vue')
const Register = () => import('@/pages/auth/Register.vue')
const Login = () => import('@/pages/auth/Login.vue')

import Special from '@/components/Special.vue'
//import Special2 from '@/components/Special2.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
    { path: '/special', component: Special },

    //{ path: '/special', component: Special },
    { path: '/food', component: GetApi },
    { path: '/service', component: Services },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    
    { path: '/:pathMatch(.*)*', component: NotFound},
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router