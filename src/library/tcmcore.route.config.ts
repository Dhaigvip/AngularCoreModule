/*
  Vipul Dhaigude        2017-01-01    Created
*/

import { RouteInfo } from './tcmcore-module/tcmcore-objects/tcmcore.domain.objects';

import { PagenotFoundComponent } from './tcmcore-module/core-components/pagenotfound/pagenotfound.component';
import { PagenotAutheticatedComponent } from './tcmcore-module/core-components/pagenotautheticated/pagenotautheticated.component';
import { SignInComponent } from './tcmcore-module/core-components/signin/signinpage.component';
import { SignUpComponent } from './tcmcore-module/core-components/signup/signupage.component';

export const CORE_ROUTES: RouteInfo[] = [
  { path: 'pagenotfound', component: PagenotFoundComponent, display: false, id: 'pagenotfound', title: '', icon: '', class: 'dropdown', ordinal: 1 },
  { path: 'pagenotautheticated', component: PagenotAutheticatedComponent, display: false, id: 'pagenotautheticated', title: '', icon: '', class: 'dropdown', ordinal: 2 },
  { path: 'signinpage', component: SignInComponent, display: false, id: 'signinpage', title: '', icon: '', class: 'dropdown', ordinal: 3 },
  { path: 'signuppage', component: SignUpComponent, display: false, id: 'signuppage', title: '', icon: '', class: 'dropdown', ordinal: 3 },

];
