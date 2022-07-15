import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

createApp(App).use(store).use(router).mount('#app')

