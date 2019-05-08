import { RouteInfo } from '../../tcmcore-objects/tcmcore.domain.objects';

export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard', id: 'dashboard', title: 'Home', icon: '', class: 'dropdown', ordinal: 1
  },
  {
    path: 'pages', id: 'pages', title: 'Pages', icon: '', ordinal: 2, class: 'dropdown', children: [
      //{ path: 'pages/formlayout', id: 'formlayout', title: 'Layout', icon: '', ordinal: 1, class: '' },
      //{ path: 'pages/dashboardA', id: 'dashboardA', title: 'Dashboard Analysis', icon: '', class: '' },
      { path: 'pages/dashboardB', id: 'dashboardB', title: 'Dashboard Wall', ordinal: 2, icon: '', class: '' },
      { path: 'pages/profile', id: 'profile', title: 'Profile', icon: '', ordinal: 3, class: '' },

      { path: 'pages/error404', id: 'error404', title: 'Error404', icon: '', ordinal: 4, class: '' },
      { path: 'pages/error505', id: 'error505', title: 'Error505', icon: '', ordinal: 5, class: '' },
      //{ path: '/pages/forgotpassword', title: 'Password', icon: '', class: '' },
      //{ path: '/pages/lockme', title: 'Lock Me', icon: '', class: '' },
      //{ path: '/pages/signin', title: 'Sign In ', icon: '', class: '' },
      //{ path: '/pages/signup', title: 'SIgn Up', icon: '', class: '' },
      //{ path: '/pages/blank', title: 'Blank', icon: '', class: '' },
    ]
  },
  {
    path: 'components', id: 'comps', title: 'UI Components', ordinal: 3, icon: '', class: 'dropdown', children: [
      { path: 'components/arrow', id: 'arr', title: 'Arrows', icon: '', ordinal: 2, class: '' },
      { path: 'components/badge', id: 'badg', title: 'Badges', icon: '', ordinal: 1, class: '' },
      { path: 'components/button', id: 'but', title: 'Buttons', icon: '', ordinal: 3, class: '' },
      { path: 'components/color', id: 'color', title: 'Color', icon: '', ordinal: 4, class: '' },
      { path: 'components/layout', id: 'layout', title: 'Layout', icon: '', ordinal: 5, class: '' },
      { path: 'components/listgroup', id: 'listgrp', title: 'List', icon: '', ordinal: 6, class: '' },
      { path: 'components/nav', id: 'nav', title: 'Nav', icon: '', ordinal: 7, class: '' },
      { path: 'components/streamline', id: 'streamline', title: 'Streamline', ordinal: 8, icon: '', class: '' },
      { path: 'components/timeline', id: 'timeline', title: 'Timeline', icon: '', ordinal: 9, class: '' },
    ]
  },
  {
    path: 'test', id: 'form', title: 'Form', icon: '', ordinal: 4, class: 'dropdown', children: [
      { path: 'test1', id: 'test1', title: 'Order Report', icon: '', ordinal: 1, class: '' },
      { path: 'test2', id: 'test2', title: 'SIP Summary', icon: '', ordinal: 2, class: '' },
      { path: 'test3', id: 'test3', title: 'Flexi Invest Summary', ordinal: 3, icon: '', class: '' },
      { path: 'test4', id: 'test4', title: 'Capital Gain', icon: '', ordinal: 4, class: '' }
    ]
  },
  { path: 'chart', id: 'chart', title: 'Charts', icon: '', ordinal: 5, class: 'dropdown'},
];
