import Vue from 'vue'
import vueRouter from 'vue-router'


Vue.use(vueRouter)

export const mainRouter = [
    {
        path: '/',
        component: () => import('@/views/index')
    }
]

const router = new vueRouter({
    routes: mainRouter
})

export default router