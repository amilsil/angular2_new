import { Bill } from "../models";

export class ExpenseService {
    bills: Bill[];

    constructor() {
        this.bills = [
            new Bill(1, "Coffee", 8),
            new Bill(2, "Breakfast", 10),
            new Bill(3, "Umbrella  ", 35),
            new Bill(4, "Salad", 6),
            new Bill(5, "Petrol", 52)
        ];
    }

    getExpenses() {
        return this.bills;
    }

    addBill(bill: Bill) {
        this.bills.push(bill);
    }
}