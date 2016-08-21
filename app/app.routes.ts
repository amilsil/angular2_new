import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation.component';
import { AboutComponent } from './components/about.component';
import { ExpensesComponent } from './components/expenses.component';

const AppRoutes = [
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
  { 
    path: '**', 
    component: ExpensesComponent 
  }
];

export const routing = RouterModule.forRoot(AppRoutes);
