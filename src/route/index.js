import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/components/About.vue'
import Menu from '@/components/Menu.vue'
import Special from '@/components/Special.vue'
import OurFood from '@/components/OurFood.vue'
import Services from '@/components/Services.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
    { path: '/special', component: Special },
    { path: '/food', component: OurFood },
    { path: '/service', component: Services },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router