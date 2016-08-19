import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from "../models";

@Component ({
    selector: 'expense-form',
    template: 
    `
    <input type="button" (click)="addBill()" value="Save" class="btn btn-primary"/><br/>
    Description: <input [(ngModel)]="bill.description" /><br/>
    Amount: <input [(ngModel)]="bill.amount" />
    `
})

export class ExpenseForm {
    @Input()
    bill: Bill;

    @Output()
    onAdded = new EventEmitter<boolean>();

    addBill() {
        this.onAdded.emit(true);
    }
}