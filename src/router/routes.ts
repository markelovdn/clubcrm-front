// path: src/router/routes.ts

import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/TheIndex.vue'),
    meta: {
      layout: 'Hero',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('@/pages/TheAbout.vue'),
    meta: {
      layout: 'Register',
    },
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import('@/pages/TheProfile.vue'),
    meta: {
      layout: 'Cabinet',
    },
  },

  {
    path: '/button',
    name: 'Button',
    component: () =>
      import('@/pages/ui/Button.vue'),
    meta: {
      layout: 'Cabinet',
    },
  },

  {
    path: '/input',
    name: 'Input',
    component: () =>
      import('@/pages/ui/Input.vue'),
    meta: {
      layout: 'Cabinet',
    },
  },
];

export default routes;

// import { createRouter, createWebHistory } from 'vue-router';
// import Hero from '@/layouts/HeroLayout.vue';
// import Radiobutton from '@/pages/ui/Radiobutton.vue';
// import Progress from '@/pages/ui/Progress.vue';
// import Input from '@/pages/ui/Input.vue';
// import Select from '@/pages/ui/Select.vue';
// import Tabs from '@/pages/ui/Tabs.vue';
// import Table from '@/pages/ui/Table.vue';
// import Upload from '@/pages/ui/Upload.vue';
// import Modal from '@/pages/ui/Modal.vue';
// import Label from '@/pages/ui/Label.vue';
// import Accordion from '@/pages/ui/Accordion.vue';
// import Card from '@/pages/ui/Card.vue';
// import Lightbox from '@/pages/ui/Lightbox.vue';
// import Images from '@/pages/ui/Images.vue';
// import Notification from '@/pages/ui/Notification.vue';
// import Spinner from '@/pages/ui/Spinner.vue';


// // TODO: почитай про https://router.vuejs.org/guide/advanced/lazy-loading.html возможно, что разумнее где-то будет использовать

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'Hero',
//       component: Hero,
//       meta: {
//         layout: 'hero'
//       },
//     },
//     {
//       path: '/button',
//       name: 'Button',
//       components: {
//         default: () => import('@/pages/ui/Button.vue'),
//         HeroLayout: () => import('@/layouts/HeroLayout.vue'),
//       },
//     },
//     {
//       path: '/typography',
//       name: 'Typography',
//       components: {
//         default: () => import('@/pages/ui/Typography.vue'),
//         HeroLayout: () => import('@/layouts/AuthLayout.vue'),
//       },
//     },
//     {
//       path: '/checkbox',
//       name: 'Checkbox',
//       components: {
//         default: () => import('@/pages/ui/Checkbox.vue'),
//         HeroLayout: () => import('@/layouts/CabinetLayout.vue'),
//       },
//     },
//     {
//       path: '/radiobutton',
//       name: 'Radiobutton',
//       component: Radiobutton,
//     },
//     {
//       path: '/progress',
//       name: 'Progress',
//       component: Progress,
//     },
//     {
//       path: '/input',
//       name: 'Input',
//       component: Input,
//     },
//     {
//       path: '/select',
//       name: 'Select',
//       component: Select,
//     },
//     {
//       path: '/tabs',
//       name: 'Tabs',
//       component: Tabs,
//     },
//     {
//       path: '/table',
//       name: 'Table',
//       component: Table,
//     },
//     {
//       path: '/upload',
//       name: 'Upload',
//       component: Upload,
//     },
//     {
//       path: '/modal',
//       name: 'Modal',
//       component: Modal,
//     },
//     {
//       path: '/label',
//       name: 'Label',
//       component: Label,
//     },
//     {
//       path: '/accordion',
//       name: 'Accordion',
//       component: Accordion,
//     },
//     {
//       path: '/card',
//       name: 'Card',
//       component: Card,
//     },
//     {
//       path: '/lightbox',
//       name: 'Lightbox',
//       component: Lightbox,
//     },
//     {
//       path: '/images',
//       name: 'Images',
//       component: Images,
//     },
//     {
//       path: '/notification',
//       name: 'Notification',
//       component: Notification,
//     },
//     {
//       path: '/spinner',
//       name: 'Spinner',
//       component: Spinner,
//     },
//   ],
// });

// export default router;