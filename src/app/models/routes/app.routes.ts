import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../../components/home-component/home-component.component').then(
        (m) => m.HomeComponentComponent
      ),
  },
  {
    path: 'ngif-view',
    loadComponent: () =>
      import('../../components/nglf-home/nglf-home.component').then(
        (m) => m.NglfHomeComponent
      ),
  },
  {
    path: 'ngif-else-home',
    loadComponent: () =>
      import('../../components/ngif-else-home/ngif-else-home.component').then(
        (m) => m.NgifElseHomeComponent
      ),
  },
  {
    path: 'ng-switch',
    loadComponent: () =>
      import('../../components/ng-switch-home/ng-switch-home.component').then(
        (m) => m.NgSwitchHomeComponent
      ),
  },
  {
    path: 'ng-from-home',
    loadComponent: () =>
      import('../../components/ng-from-home/ng-from-home.component').then(
        (m) => m.NgFromHomeComponent
      ),
  },
  {
    path: 'style-home',
    loadComponent: () =>
      import(
        '../../components/style-component-home/style-component-home.component'
      ).then((m) => m.StyleComponentHomeComponent),
  },
  {
    path: 'ng-for',
    loadComponent: () =>
      import('../../components/ngfor-home/ngfor-home.component').then(
        (m) => m.NgforHomeComponent
      ),
  },
  {
    path: 'qrcode',
    loadComponent: () =>
      import('../../components/qrcode-home/qrcode-home.component').then(
        (m) => m.QrcodeHomeComponent
      ),
  },
  {
    path: 'view-child',
    loadComponent: () =>
      import('../../components/view-child-home/view-child-home.component').then(
        (m) => m.ViewChildHomeComponent
      ),
  },
  {
    path: 'directive',
    loadComponent: () =>
      import(
        '../../components/directive-componment/directive-componment.component'
      ).then((m) => m.DirectiveComponmentComponent),
  },
  {
    path: 'service1',
    loadComponent: () =>
      import(
        '../../components/service-tutorial-one/service-tutorial-one.component'
      ).then((m) => m.ServiceTutorialOneComponent),
  },
  {
    path: 'event-binding-home',
    loadComponent: () =>
      import(
        '../../components/event-binding-home/event-binding-home.component'
      ).then((m) => m.EventBindingHomeComponent),
  },
  {
    path: 'prime-ng',
    loadComponent: () =>
      import('../../components/prime-ng-home/prime-ng-home.component').then(
        (m) => m.PrimeNGHomeComponent
      ),
  },
  {
    path: 'service2',
    loadComponent: () =>
      import(
        '../../components/service-tutorial-two/service-tutorial-two.component'
      ).then((m) => m.ServiceTutorialTwoComponent),
  },
  {
    path: 'service3',
    loadComponent: () =>
      import(
        '../../components/service-tutorial-tree/service-tutorial-tree.component'
      ).then((m) => m.ServiceTutorialTreeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../components/oops/oops.component').then(
        (m) => m.OopsComponent
      ),
  },
];
