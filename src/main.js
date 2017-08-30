import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import vClickOutside from 'v-click-outside';

// Firebase
import VueFire from 'vuefire';
import Firebase from 'firebase';

// library imports
import Chartist from 'chartist';
import 'bootstrap/dist/css/bootstrap.css';
import 'es6-promise/auto';

// Plugins
import GlobalComponents from './globalComponents';
import Notifications from './components/UIComponents/NotificationPlugin';
import SideBar from './components/UIComponents/SidebarPlugin';
import App from './App';

// router setup
import routes from './routes/routes';

import './assets/sass/paper-dashboard.scss';

// plugin setup
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);
Vue.use(VueFire);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
});

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist,
  },
});
