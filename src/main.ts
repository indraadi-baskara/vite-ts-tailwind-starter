import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true
});
app.component('InputText', InputText)

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
