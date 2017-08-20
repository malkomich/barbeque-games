// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview';
import UserProfile from 'src/components/Dashboard/Views/UserProfile';
import Notifications from 'src/components/Dashboard/Views/Notifications';
import Icons from 'src/components/Dashboard/Views/Icons';
import Maps from 'src/components/Dashboard/Views/Maps';
import Typography from 'src/components/Dashboard/Views/Typography';
import TableList from 'src/components/Dashboard/Views/TableList';
import RandomBinge from 'src/components/Dashboard/Views/RandomBinge';
import CardsGame from 'src/components/Dashboard/Views/CardsGame';

import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout';
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview,
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile,
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications,
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons,
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps,
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography,
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList,
      },
      {
        path: 'random-binge',
        name: 'random-binge',
        component: RandomBinge,
      },
      {
        path: 'cards-game',
        name: 'cards-game',
        component: CardsGame,
      },
    ],
  },
  { path: '*', component: NotFound },
];

export default routes;
