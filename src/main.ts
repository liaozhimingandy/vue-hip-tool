import { createApp} from 'vue';
// @ts-ignore
import router from "@/router/index";
import './style.css'
// @ts-ignore
import App from '@/App.vue';

const app = createApp(App);

// if (process.env.NODE_ENV === 'production') {
//   app.config.devtools = false; // 禁用 Vue Devtools
//   app.config.performance = false; // 禁用性能追踪
// }

app.use(router).mount('#app')
