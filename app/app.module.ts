// modules
import { RouterModule }  from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// components
import { AppComponent }  from './components/app.component';
import { DocumentationComponent }  from './components/documentation.component';
import { AboutComponent }  from './components/about.component';
import { ExpensesComponent }  from './components/expenses.component';
import { ExpenseForm }  from './components/expenseform.component';
// routes
import { routing } from './app.routes';
// services
import { ExpenseService } from "./services/expenses.service";


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    routing 
  ],

  declarations: [ 
    AppComponent, 
    DocumentationComponent, 
    AboutComponent, 
    ExpensesComponent,
    ExpenseForm
  ],
  
  bootstrap: [ AppComponent ], 
  providers: [ ExpenseService ]
})

export class AppModule {}