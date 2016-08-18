import { DocumentationComponent } from './components/documentation.component';
import { AboutComponent } from './components/about.component';
import { ExpensesComponent } from './components/expenses.component';

export const AppRoutes = [
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