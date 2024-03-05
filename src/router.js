import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import Projects from './pages/Projects.vue';
import AppNotFound from './pages/AppNotFound.vue';
import DetailProject from './pages/DetailProject.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        },
        {
            path: '/projects/:slug',
            name: 'detail_project',
            component: DetailProject
        }
    ]
});

export default router;