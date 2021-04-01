import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Gallery from '../views/Gallery'
import Contact from '../views/Contact'
import _404 from '../views/_404'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },


]

const router = createRouter({
    routes,
    mode:'hash'
})

export default router
