import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/HomePage.vue";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/test', name: 'test', component: HomePage, meta: {
            layout: 'TestLayout'
            }},
        // {
        //     path: '/vacancies',
        //     name: 'vacancies',
        //     component: VacanciesPage,
        //     meta: {
        //         layout: 'OtherLayout',
        //     },
        // },
    ],
});
