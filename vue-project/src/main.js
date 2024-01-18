import './assets/main.css'
// 從一個單文件組件中導入根組件
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 通過 createApp 函數創建一個新的應用實例
const app = createApp(App)
// 調用 .mount() 方法挂載應用
app.mount('#app')
