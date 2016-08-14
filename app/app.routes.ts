import { provideRouter, RouterConfig }  from '@angular/router';
import { DocumentationComponent } from './components/documentation.component';
import { AboutComponent } from './components/about.component';
import { ExpensesComponent } from './components/expenses.component';

const routes: RouterConfig = [
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: ExpensesComponent
  },
  { path: '**', component: ExpensesComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
