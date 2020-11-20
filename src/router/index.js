import Vue from 'vue'
import vueRouter from 'vue-router'


Vue.use(vueRouter)

export const mainRouter = [
    {
        path: '/',
        component: () => import('@/views/index')
    },
    {
        path: '/:id/detail',
        component: () => import('@/views/detail')
    },
    {
        path: '/pay',
        component: () => import('@/views/pay')
    }
]

const router = new vueRouter({
    routes: mainRouter
})

export default router