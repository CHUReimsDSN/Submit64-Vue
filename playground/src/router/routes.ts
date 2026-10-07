import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      {
        path: 'event-builder',
        name: 'event-builder',
        component: () => import('pages/TestEventBuilder.vue'),
      },
      { path: 'slots', name: 'slots', component: () => import('pages/TestSlots.vue') },
      { path: 'unlink', name: 'unlink', component: () => import('pages/TestUnlink.vue') },
      { path: 'settings', name: 'settings', component: () => import('pages/TestFormSettings.vue') },
      { path: 'bindings', name: 'bindings', component: () => import('pages/TestFormBindings.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
