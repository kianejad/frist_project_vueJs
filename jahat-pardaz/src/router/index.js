import {createRouter, createWebHistory} from 'vue-router'
import {LoginPage, TicketPage} from '@/pages'
import {PATHS} from "@/configs/routes.config";


const routes = [
    {
        path: PATHS.LOGIN,
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: PATHS.TICKETS,
        name: 'TicketPage',
        component: TicketPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
