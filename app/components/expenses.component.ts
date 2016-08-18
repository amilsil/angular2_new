import { Component } from '@angular/core';
import { Bill } from "../models";
import { ExpenseService } from "../services/expenses.service";

@Component ({
    selector: 'expenses',
    template: 
    `
    <h1> Expenses </h1>
    <table class="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tr  *ngFor="let bill of bills">
            <td>{{bill.id}}</td>
            <td>{{bill.description}}</td>
            <td>{{bill.amount}}</td>
        </tr>
    </table>

    <span class="big">
        <h3>{{getTotal()}} in total </h3>
    </span>
    `
})

export class ExpensesComponent {
    constructor(private service: ExpenseService){}

    bills: Bill[] = this.service.getExpenses();

    getTotal() {
        return 50;
    }
}