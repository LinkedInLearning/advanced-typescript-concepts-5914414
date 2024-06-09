import { Invoice } from './invoice';

export function calculateTotal(invoices: Invoice[]) {
  return invoices.reduce((total, invoice) => total + invoice.amount, 0);
}

let invoices = [new Invoice(100), new Invoice(200)];
console.log(calculateTotal(invoices));  // Outputs: 300
