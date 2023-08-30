import './assets/styles/global/index.css';
import './assets/icons/index.js';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { registerLayouts } from './layouts/register';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

registerLayouts(app);

app.use(createPinia()).mount('#app');