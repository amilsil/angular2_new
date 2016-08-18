import { RouterModule }  from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { DocumentationComponent }  from './components/documentation.component';
import { AboutComponent }  from './components/about.component';
import { ExpensesComponent }  from './components/expenses.component';
import { AppRoutes } from './app.routes';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(AppRoutes) ],
  declarations: [ AppComponent, DocumentationComponent, AboutComponent, ExpensesComponent ],
  bootstrap: [AppComponent]
})

export class AppModule {}