/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
//import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')







// --- Dynamic PWA meta theme-color from Vuetify ---
const setMetaThemeColorFromVuetify = () => {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (!meta) return

  const style = getComputedStyle(document.body)
  const bg = style.getPropertyValue('--v-theme-background').trim()
  if (bg) meta.setAttribute('content', 'rgb(' + bg +')');
}
// initial set
setMetaThemeColorFromVuetify()
// listen for system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  setMetaThemeColorFromVuetify()
})