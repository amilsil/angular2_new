import { Bill } from "../models";

export class ExpenseService {
    getExpenses() {
        return [
            new Bill(1, "Coffee", 8),
            new Bill(2, "Breakfast", 10),
            new Bill(3, "Umbrella  ", 35),
            new Bill(4, "Salad", 6),
            new Bill(5, "Petrol", 52)
        ];
    }
}