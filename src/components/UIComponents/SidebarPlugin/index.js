import Sidebar from './SideBar';

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview',
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/admin/stats',
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list',
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography',
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons',
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps',
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications',
    },
    {
      name: 'Random Binge',
      icon: 'ti-paint-bucket',
      path: '/admin/random-binge',
    },
    {
      name: 'Cards Game',
      icon: 'ti-layout-column2',
      path: '/admin/cards-game',
    },

  ],
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {

  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get() {
        return this.$root.sidebarStore;
      },
    });
    Vue.component('side-bar', Sidebar);
  },
};

export default SidebarPlugin;
