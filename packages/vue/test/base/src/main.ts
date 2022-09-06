import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@musangowope/cool-components-vue';

/* Core CSS required for Ionic components to work properly */
import '@musangowope/cool-components-vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@musangowope/cool-components-vue/css/normalize.css';
import '@musangowope/cool-components-vue/css/structure.css';
import '@musangowope/cool-components-vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@musangowope/cool-components-vue/css/padding.css';
import '@musangowope/cool-components-vue/css/float-elements.css';
import '@musangowope/cool-components-vue/css/text-alignment.css';
import '@musangowope/cool-components-vue/css/text-transformation.css';
import '@musangowope/cool-components-vue/css/flex-utils.css';
import '@musangowope/cool-components-vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/**
 * Vue 3 has its own error handling.
 * Throwing errors in promises go through
 * this handler, but Cypress does not
 * pick up on them so tests that are meant
 * to fail will pass. By listening for unhandledrejection
 * we can throw an error outside of Vue that will
 * cause the test to fail as it should.
 * See https://github.com/cypress-io/cypress/issues/5385#issuecomment-547642523
 */
window.addEventListener('unhandledrejection', (err) => {
  throw new Error(err.reason);
});

const app = createApp(App)
  .use(IonicVue, { hardwareBackButton: true })
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
