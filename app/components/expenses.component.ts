import { Component } from '@angular/core';

class Bill {
    constructor(public id, public description, public amount){};
}

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
    bills: Bill[] = [
        new Bill(1, "Coffee", 8),
        new Bill(2, "Breakfast", 10),
        new Bill(3, "Umbrella  ", 35),
        new Bill(4, "Salad", 6),
        new Bill(5, "Petrol", 52)
    ];

    getTotal() {
        return 50;
    }
}