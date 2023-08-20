import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import Button from '@/pages/ui/Button.vue';
import Typography from '@/pages/ui/Typography.vue';
import Checkbox from '@/pages/ui/Checkbox.vue';
import Radiobutton from '@/pages/ui/Radiobutton.vue';
import Progress from '@/pages/ui/Progress.vue';
import Input from '@/pages/ui/Input.vue';
import Select from '@/pages/ui/Select.vue';
import Tabs from '@/pages/ui/Tabs.vue';
import Table from '@/pages/ui/Table.vue';
import Upload from '@/pages/ui/Upload.vue';
import Modal from '@/pages/ui/Modal.vue';
import Label from '@/pages/ui/Label.vue';
import Accordion from '@/pages/ui/Accordion.vue';
import Card from '@/pages/ui/Card.vue';
import Lightbox from '@/pages/ui/Lightbox.vue';
import Images from '@/pages/ui/Images.vue';
import Notification from '@/pages/ui/Notification.vue';
import Spinner from '@/pages/ui/Spinner.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/button',
      name: 'Button',
      component: Button,
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography,
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox,
    },
    {
      path: '/radiobutton',
      name: 'Radiobutton',
      component: Radiobutton,
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
    },
    {
      path: '/input',
      name: 'Input',
      component: Input,
    },
    {
      path: '/select',
      name: 'Select',
      component: Select,
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload,
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/label',
      name: 'Label',
      component: Label,
    },
    {
      path: '/accordion',
      name: 'Accordion',
      component: Accordion,
    },
    {
      path: '/card',
      name: 'Card',
      component: Card,
    },
    {
      path: '/lightbox',
      name: 'Lightbox',
      component: Lightbox,
    },
    {
      path: '/images',
      name: 'Images',
      component: Images,
    },
    {
      path: '/notification',
      name: 'Notification',
      component: Notification,
    },
    {
      path: '/spinner',
      name: 'Spinner',
      component: Spinner,
    },
  ],
});

export default router;
