import { RouteInfo, ContainerComponent } from "../library/index";


import { HomeComponent } from './home/home.component';
import { TestComponent } from './TestForm/test.component';
import { MenuComponent } from './charts/menu.component';
import { DashBoardChartComponent } from './DashBoardCharts/chart.component';
import { ProfileComponent } from './pages/Profile/profile.component';
import { BlankComponent } from './Pages/Blank/blank.component';
import { Error404Component } from './Pages/Error404/error404.component';
import { Error505Component } from './Pages/Error505/error505.component';
import { ForgotpasswordComponent } from './Pages/Forgotpassword/forgotpassword.component';
import { LockmeComponent } from './Pages/Lockme/lockme.component';
import { SignInComponent } from './Pages/SignIn/signin.component';
import { SignUPComponent } from './Pages/SignUp/signup.component';
import { FormlayoutComponent } from './Pages/FormLayout/formlayout.component';
import { Formlayout2Component } from './Pages/FormLayout/formlayout2.component';
import { Formlayout3Component } from './Pages/FormLayout/formlayout3.component';



import { ArrowComponent } from './UIComponents/Arrow/arrow.component';
import { BadgeComponent } from './UIComponents/badge/badge.component';
import { ButtonComponent } from './UIComponents/button/button.component';
import { ColorComponent } from './UIComponents/color/color.component';
import { LayoutComponent } from './UIComponents/layout/layout.component';
import { ListgroupComponent } from './UIComponents/listgroup/listgroup.component';
import { NavComponent } from './UIComponents/nav/nav.component';
import { TimelineComponent } from './UIComponents/timeline/timeline.component';
import { StreamlineComponent } from './UIComponents/streamline/streamline.component';
import { DashboardAComponent } from './Pages/dashboard-analysis/dashboardA.component';
import { DashboardBComponent } from './Pages/dashboard-wall/dashboardB.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';


import { SettingsComponent, Inbox, InboxList, PagenotFoundComponent } from '../library/index'
import { Formlayout4Component } from "./Pages/FormLayout/formlayout4.component";
import { Test2Component } from "./TestForm/test2.component";
import { Test3 } from "./TestForm/test3";
import { AuthGuard } from "../library/tcmcore-module/core-services/Guards/tcmcore.authguard";



export const MAIN_ROUTES: RouteInfo[] = [
  { path: 'dashboard', component: HomeComponent, id: 'dashboard', title: 'Home', icon: '', class: 'dropdown', ordinal: 1, display: true },
  { path: '', redirectTo: 'pages', pathMatch: 'full', display: false },
  {
    path: 'pages',   
    component: ContainerComponent, display: true, id: 'pages', title: 'Sample Pages', icon: '', class: 'dropdown', ordinal: 2, children:
    [
      { path: '', redirectTo: 'layout', pathMatch: 'full' },
      { path: 'layout', component: FormlayoutComponent, display: true, id: 'layout', title: 'translated_header', icon: '', class: 'dropdown', ordinal: 1 },
      { path: 'layout2', component: Formlayout2Component, display: true, id: 'layout2', title: 'Layout2', icon: '', class: 'dropdown', ordinal: 2 },
      { path: 'layout3', component: Formlayout3Component, display: true, id: 'layout3', title: 'Layout3', icon: '', class: 'dropdown', ordinal: 2 },
      { path: 'layout4', component: Formlayout4Component, display: true, id: 'layout4', title: 'Layout4', icon: '', class: 'dropdown', ordinal: 2 },
      { path: 'dashboardA', component: DashboardAComponent, display: true, id: 'dashboardA', title: 'Dashboard Analysis', icon: '', class: 'dropdown', ordinal: 2 },
      { path: 'dashboardB', component: DashboardBComponent, display: true, id: 'dashboardB', title: 'Dashboard Wall', icon: '', class: 'dropdown', ordinal: 3 },
      { path: 'profile', component: ProfileComponent, display: true, id: 'profile', title: 'Profile', icon: '', class: 'dropdown', ordinal: 4 },
      { path: 'blank', component: BlankComponent, display: true, id: 'blank', title: 'Blank', icon: '', class: 'dropdown', ordinal: 5 },
      { path: 'error404', component: Error404Component, display: true, id: 'error404', title: 'Error404', icon: '', class: 'dropdown', ordinal: 6 },
      { path: 'error505', component: Error505Component, display: true, id: 'error505', title: 'Error505', icon: '', class: 'dropdown', ordinal: 7 },
      { path: 'forgotpassword', component: ForgotpasswordComponent, display: true, id: 'password', title: 'Password', icon: '', class: 'dropdown', ordinal: 8 },
      { path: 'lockme', component: LockmeComponent, display: true, id: 'lockme', title: 'Lock Me', icon: '', class: 'dropdown', ordinal: 9 },
      { path: 'signin', component: SignInComponent, display: true, id: 'signin', title: 'Sign In', icon: '', class: 'dropdown', ordinal: 10 },
      { path: 'signup', component: SignUPComponent, display: true, id: 'signup', title: 'Sign Up', icon: '', class: 'dropdown', ordinal: 11 }
    ]
  },
  {
    path: 'components', component: ContainerComponent, display: true, id: 'components', title: 'UI components', icon: '', class: 'dropdown', ordinal: 3, children:
    [
      { path: '', redirectTo: 'arrow', pathMatch: 'full' },
      { path: 'arrow', component: ArrowComponent, display: true, id: 'arrow', title: 'Arrows', icon: '', class: 'dropdown', ordinal: 1 },
      { path: 'badge', component: BadgeComponent, display: true, id: 'badge', title: 'Badges', icon: '', class: 'dropdown', ordinal: 2 },
      { path: 'button', component: ButtonComponent, display: true, id: 'button', title: 'Buttons', icon: '', class: 'dropdown', ordinal: 3 },
      { path: 'color', component: ColorComponent, display: true, id: 'color', title: 'Colors', icon: '', class: 'dropdown', ordinal: 4 },
      { path: 'listgroup', component: ListgroupComponent, display: true, id: 'color', title: 'List', icon: '', class: 'dropdown', ordinal: 5 },
      { path: 'nav', component: NavComponent, display: true, id: 'nav', title: 'Navigation', icon: '', class: 'dropdown', ordinal: 6 },
      { path: 'streamline', component: StreamlineComponent, display: true, id: 'streamline', title: 'Stream Line', icon: '', class: 'dropdown', ordinal: 7 },
      { path: 'timeline', component: TimelineComponent, display: true, id: 'timeline', title: 'Time Line', icon: '', class: 'dropdown', ordinal: 8 },
    ]
  },
  { path: 'test',  canActivate: [AuthGuard], component: TestComponent, display: true, id: 'test', title: 'Test Form', icon: '', class: 'dropdown', ordinal: 4 },
  { path: 'test2', component: Test2Component, display: true, id: 'test2', title: 'Test Form', icon: '', class: 'dropdown', ordinal: 4 },
  { path: 'test3', component: Test3, display: true, id: 'test3', title: 'Test Form 3', icon: '', class: 'dropdown', ordinal: 5 },
  { path: 'menu', component: MenuComponent, display: true, id: 'pages', title: 'Menus', icon: '', class: 'dropdown', ordinal: 5 },
  { path: 'chart', component: DashBoardChartComponent, display: true, id: 'pages', title: 'Charts', icon: '', class: 'dropdown', ordinal: 6 },
  { path: 'settings', component: SettingsComponent, display: false, id: 'pages', title: 'Settings', icon: '', class: 'dropdown', ordinal: 7 },
  {
    path: 'inbox', component: Inbox, display: false, id: 'inbox', title: '', icon: '', class: 'dropdown', ordinal: 8,
    children: [
      { path: '', redirectTo: 'inboxlist/1', pathMatch: 'full', display: false },
      {
        path: 'inboxlist/:id', component: InboxList, display: false, id: 'inboxlist', title: 'inboxlist', icon: '', class: 'dropdown', ordinal: 1, children: [
          { path: 'test', component: Test2Component, display: false, id: 'test', title: 'Test', icon: '', class: 'dropdown', ordinal: 1 }

        ]
      },
    ]
  },
  {path: '404', component: PagenotFoundComponent },
  { path: '**', redirectTo: '/404' }
]
