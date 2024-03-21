import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  console.log(`123123123123`,123123123123)
  const app = createSSRApp(App);
  return {
    app,
  };
}
