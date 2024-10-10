import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true
});
app.component('InputText', InputText)
app.component('Textarea', Textarea)

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
