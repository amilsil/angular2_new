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

   <expense-form [bill]="bill" (onAdded)="addBill($event)"></expense-form>
    `
})

export class ExpensesComponent {
    bill: Bill;
    constructor(private service: ExpenseService){
        this.bill = new Bill();
    }

    bills: Bill[] = this.service.getExpenses();

    getTotal() {
        return 50;
    }

    addBill(success:boolean) {
        if(success) {
            this.bill.id = this.bills.length + 6;
            this.bills.push(this.bill);
        }
    }

}